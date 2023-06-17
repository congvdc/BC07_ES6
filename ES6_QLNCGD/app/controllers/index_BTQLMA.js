import MonAn from '../models/MonAn.js';
import Menu from '../models/Menu.js';

// sự kiện thêm món ăn
let menu = new Menu();

menu.layLocal();

document.getElementById('btnThemMon').addEventListener('click', () => {
  // lấy dữ liệu từ người dùng
  // ở đây sử dụng cú pháp query selector all để lấy hết tất cả input, select, textarea trong form và sau đó dùng vòng lặp để lấy dữ liệu
  let arrInput = document.querySelectorAll(
    '#foodForm input, #foodForm select, #foodForm textarea'
  );
  let monAn = new MonAn();
  // dùng vòng lặp để lấy dữ liệu từ arrInput và thêm vào đối tượng món ăn
  for (let item of arrInput) {
    // let id = item.id;
    // let value = item.value;
    let { id, value } = item;
    // id : foodID , value :10
    // monAn.foodID = 10;
    monAn[id] = value;
  }
  menu.themMonAn(monAn);
  menu.renderMonAn();
  menu.luuLocal();
  document.getElementById('btnClose').click();
});

window.xoaMonAn = (idMonAn) => {
  menu.xoaMonAn(idMonAn);
};

window.layThongTinMonAn = (idMonAn) => {
  menu.layThongTinMonAn(idMonAn);
};

document.getElementById('btnCapNhat').onclick = () => {
  // lấy dữ liệu người dùng
  let arrInput = document.querySelectorAll(
    '#foodForm input, #foodForm select, #foodForm textarea'
  );
  let monAn = new MonAn();
  // dùng vòng lặp để lấy dữ liệu từ arrInput và thêm vào đối tượng món ăn
  for (let item of arrInput) {
    // let id = item.id;
    // let value = item.value;
    let { id, value } = item;
    // id : foodID , value :10
    // monAn.foodID = 10;
    monAn[id] = value;
  }
  menu.chinhSuaMonAn(monAn);
};

// document.getElementById('inputSearch').addEventListener('keyup', (event) => {
//   let value = event.target.value;
//   console.log(value);
// });

window.timKiemMonAn = (event) => {
  let value = event.target.value;
  console.log(value);
  menu.timKiemMonAn(value);
};
