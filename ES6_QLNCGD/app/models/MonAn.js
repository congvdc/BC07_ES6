/** Phân tích sơ qua về các thuộc tính và phương thức của lớp đối tượng món ăn
 * Thuộc tính: maMon,tenMon,loaiMon,giaMon,khuyenMai,tinhTrang,hinhMon,moTa
 * - Phương thức: tính giá khuyến mãi
 */

export default class MonAn {
  constructor() {
    this.foodID = '';
    this.tenMon = '';
    this.loai = '';
    this.giaMon = '';
    this.khuyenMai = '';
    this.tinhTrang = '';
    this.hinhMon = '';
    this.moTa = '';
  }
  tinhGiaKhuyenMai = () => {
    return this.giaMon * 1 * ((this.khuyenMai * 1) / 100);
  };
}
