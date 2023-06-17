import Employee from './Employee.js';
import removeVietnameseTones from '../controllers/helper.js';

export default class DSNV {
    constructor() {
        this.arrNV = [];
    }
    themNV(emp) {
        this.arrNV.push(emp);
    }
    renderNV() {
        let content = this.arrNV.map((item, index) => {       
            let emp = new Employee();
            Object.assign(emp, item);
            console.log(emp);
            let {
                id,
                ten,
                diaChi,
                email,
                soNgay,
                luong,
                tinhLuong
            } = emp;

            return `
            <tr>
                <td>${id}</td>
                <td>${ten}</td>
                <td>${diaChi}</td>
                <td>${email}</th>
                <td>${soNgay}</td>
                <td>${luong}</td>
                <td>${tinhLuong()}</td>
                <td>
                <button class="btn btn-danger" onclick="xoaNV('${id}')">Xóa</button>
                <button class="btn btn-warning" onclick="layThongTinNV('${id}')">Sửa</button>
                </td>
            </tr>
            `;
        });
        document.getElementById('tbodyEmployee').innerHTML = content.join('');
    }
    luuLocalNV() {
        localStorage.setItem('arrNV', JSON.stringify(this.arrNV));
    }
    layLocalNV() {
        let dsnvLocal = JSON.parse(localStorage.getItem('arrNV'));
        if (dsnvLocal) {
            this.arrNV = [...dsnvLocal];
            this.renderNV();
        }
    }
    xoaNV(idNV) {
        let index = this.arrNV.findIndex((item) => item.id == idNV);
        if (index != -1) {
            this.arrNV.splice(index, 1);
            this.renderNV();
            this.luuLocalNV();
        }
    }
    layThongTinNV(idNV) {
        let emp = this.arrNV.find((item) => item.id == idNV);
        if (emp) {
            document.getElementById('btnThemNV').click();
            let arrInputNV = document.querySelectorAll(
                '#EmployeeForm input, #EmployeeForm textarea'
            );
            for (let item of arrInputNV) {
                let { id } = item;
                item.value = emp[id];
            }
        }
    }
    chinhSuaNV(emp) {
        let index = this.arrNV.findIndex((item) => item.id == emp.id);
        if(index != -1) {
            this.arrNV[index] = emp;
            this.renderNV();
            this.luuLocalNV();
            document.getElementById('btnCloseEmp').click();
        }
    }
    timKiemNV(keyword){
        let newKeyWord = removeVietnameseTones(keyword);
        let arrTimKiem =  this.arrNV.filter((item) => {
            let tenNVMoi = removeVietnameseTones(item.ten);
            return tenNVMoi
            .toLowerCase()
            .trim()
            .includes(newKeyWord.toLowerCase().trim());
        });


    }

}
