import Employee from '../models/Employee.js';
import DSNV from '../models/DSNV.js';

let dsnv = new DSNV();
dsnv.layLocalNV();

document.getElementById('btnThemEmp').addEventListener('click', () => {

    let arrInputNV = document.querySelectorAll(
        '#EmployeeForm input, #foodForm textarea'
    );
    let emp = new Employee();

    for (let item of arrInputNV) {

        let { id, value } = item;
        emp[id] = value;
    }
    dsnv.themNV(emp);
    dsnv.renderNV();
    dsnv.luuLocalNV();
    document.getElementById('btnCloseEmp').click();
});

window.xoaNV = (idNV) => {
    dsnv.xoaNV(idNV);
};

window.layThongTinNV = (idNV) => {
    dsnv.layThongTinNV(idNV);
};

document.getElementById('btnCapNhatEmp').onclick = () => {
    let arrInputNV = document.querySelectorAll(
        '#EmployeeForm input, #EmployeeForm textarea'
    );
    let emp = new Employee();
    for (let item of arrInputNV) {

        let { id, value } = item;
        emp[id] = value;
    }
    dsnv.chinhSuaNV(emp);
};

window.timKiemNV = (event) => {
    let value = event.target.value;
    dsnv.timKiemNV(value);
};
