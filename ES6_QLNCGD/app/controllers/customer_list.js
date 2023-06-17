// Person -> Customer(MonAn.js) -> DSKH(Menu.js)
// monAn == cus
// arrMenu == arrKH
// menuLocal == dskhLocal 
// idMonAn == idKH
// btnThem == btnThemKH
// btnThemMon == btnThemCus

import Customer from "../models/Customer.js";
import DSKH from "../models/DSKH.js";


// Customer
let dskh = new DSKH();
dskh.layLocalKH();

document.getElementById('btnThemCus').addEventListener('click', () => {
    let arrInputKH = document.querySelectorAll
    (
        '#customerForm input, #customerForm textarea'
        );
    let cus = new Customer();
    for (let item of arrInputKH) {
        let {id, value} = item;
        cus[id] = value;
    }
    dskh.themKH(cus);
    dskh.renderKH();
    dskh.luuLocalKH();
    document.getElementById('btnCloseCus').click();
});
window.xoaKH = (idKH) => {
    dskh.xoaKH(idKH);
};
window.layThongTinKH = (idKH) => {
    dskh.layThongTinKH(idKH);
};
document.getElementById('btnCapNhatCus').onclick = () => {
    let arrInputKH = document.querySelectorAll(
        '#customerForm input, #customerForm textarea'
        );
    let cus = new Customer();
    for (let item of arrInputKH) {
        let {id, value} = item;
        cus[id] = value;
    }
    dskh.chinhSuaKH(cus);
};
window.timKiemKH = (event) => {
    let value = event.target.value;
    dskh.timKiemKH(value);
};