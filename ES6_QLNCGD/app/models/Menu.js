/** Thực hiện phân tích các thuộc tính cần có của một lớp đối tượng menu và các phương thức xử lí
 * - thuộc tính arrMenu : chứa tất cả các món ăn của người dùng thêm vào
 * - Phương thức: thêm món, lấy thông tin chi tiết 1 món, render món ăn ra giao diện cho người dùng, xoá món ăn, sửa thông tin món ăn,
 * lưu xuống local để khi reload dữ liệu sẽ không mất đi, gọi dữ liệu từ local để khi reload xong sẽ lấy dữ liệu đó hiển thị cho người dùng, tìm kiếm món ăn, lọc món ăn theo loại
 *
 */

import MonAn from './MonAn.js';
import removeVietnameseTones from '../controllers/helper.js';

export default class Menu {
  constructor() {
    this.arrMenu = [];
  }
  themMonAn(monAn) {
    this.arrMenu.push(monAn);
  }
  renderMonAn() {
    let content = this.arrMenu.map((item, index) => {
      let monAn = new MonAn();
      Object.assign(monAn, item);
      console.log(monAn);
      // console.log(item);
      let {
        foodID,
        tenMon,
        loai,
        giaMon,
        khuyenMai,
        tinhTrang,
        hinhMon,
        moTa,
        tinhGiaKhuyenMai,
      } = monAn;

      return `
      <tr>
                <td>${foodID}</td>
                <td>${tenMon}</td>
                <td>${loai == 'loai1' ? 'Chay' : 'Mặn'}</td>
                <td>${giaMon}</td>
                <td>${khuyenMai}%</td>
                <td>${tinhGiaKhuyenMai()}</td>
                <td>${tinhTrang}</td>
                <td>
                <button class="btn btn-danger" onclick="xoaMonAn('${foodID}')">Xoá</button>
                <button class="btn btn-warning" onclick="layThongTinMonAn('${foodID}')">Sửa</button>
                </td>
      </tr>
      `;
    });
    document.getElementById('tbodyFood').innerHTML = content;
  }
  luuLocal() {
    localStorage.setItem('arrMenu', JSON.stringify(this.arrMenu));
  }
  layLocal() {
    let menuLocal = JSON.parse(localStorage.getItem('arrMenu'));
    // kiểm tra xem có value bên dưới local hay không, nếu có mới gán giá trị vào mảng arrMenu
    if (menuLocal) {
      this.arrMenu = [...menuLocal];
      this.renderMonAn();
    }
  }
  xoaMonAn(idMonAn) {
    // dùng hàm findIndex để tìm vị trí của món ăn cần xoá trong mảng và sau đó dùng hàm splice để xoá
    let index = this.arrMenu.findIndex((item) => item.foodID == idMonAn);
    if (index != -1) {
      this.arrMenu.splice(index, 1);
      this.renderMonAn();
      this.luuLocal();
    }
  }
  layThongTinMonAn(idMonAn) {
    // dùng hàm find để tìm ra phần tử bên trong array
    let monAn = this.arrMenu.find((item) => item.foodID == idMonAn);
    if (monAn) {
      // dom tới nút button thêm món ăn để mở modal sau đó hiển thị dữ liệu lên các input cho người chỉnh sửa
      document.getElementById('btnThem').click();
      let arrInput = document.querySelectorAll(
        '#foodForm input, #foodForm select, #foodForm textarea'
      );
      for (let item of arrInput) {
        // let id = item.id
        let { id } = item;
        // item sẽ có id là foodID , item.value = monAn.foodID
        item.value = monAn[id];
      }
    }
  }
  chinhSuaMonAn(monAn) {
    let index = this.arrMenu.findIndex((item) => item.foodID == monAn.foodID);
    if (index != -1) {
      this.arrMenu[index] = monAn;
      this.renderMonAn();
      this.luuLocal();
      document.getElementById('btnClose').click();
    }
  }
  timKiemMonAn(keyword) {
    // sử dụng hàm filter để có thể lọc được tất cả những món ăn trùng với từ mà người dùng nhập vào
    // lưu ý để cho kết quả tìm kiếm tốt nhất, khi người dùng nhập vô ta nên loại bỏ có dấu từ người dùng, đẩy hết tất cả về lower case, loại bỏ khoảng cách
    let newKeyWord = removeVietnameseTones(keyword);
    let arrTimKiem = this.arrMenu.filter((item) => {
      let tenMonMoi = removeVietnameseTones(item.tenMon);
      return tenMonMoi
        .toLowerCase()
        .trim()
        .includes(newKeyWord.toLowerCase().trim());
    });
    console.log(arrTimKiem);
  }
}
