import Student from "./Student.js";
import removeVietnameseTones from '../controllers/helper.js';

export default class DSHS {
    constructor() {
        this.arrHS = [];
    }
    themHS(stu) {
        this.arrHS.push(stu);
    }
    renderHS() {
        let content = this.arrHS.map((item, index) => {       
            let stu = new Student();
            Object.assign(stu, item);
            console.log(stu);
            let {
                id,
                ten,
                diaChi,
                email,
                toan,
                ly,
                hoa,
                diemTrungBinh
            } = stu;

            return `
            <tr>
                <td>${id}</td>
                <td>${ten}</td>
                <td>${diaChi}</td>
                <td>${email}</th>
                <td>${toan}</td>
                <td>${ly}</td>
                <td>${hoa}</td>
                <td>${diemTrungBinh()}</td>
                <td>
                <button class="btn btn-danger" onclick="xoaHS('${id}')">Xóa</button>
                <button class="btn btn-warning" onclick="layThongTinHS('${id}')">Sửa</button>
                </td>
            </tr>
            `;
        });
        document.getElementById('tbodyStudent').innerHTML = content;
    }
    luuLocalHS() {
        localStorage.setItem('arrHS', JSON.stringify(this.arrHS));
    }
    layLocalHS() {
        let dshsLocal = JSON.parse(localStorage.getItem('arrHS'));
        if (dshsLocal) {
            this.arrHS = [...dshsLocal];
            this.renderHS();
        }
    }
    xoaHS(idHS) {
        let index = this.arrHS.findIndex((item) => item.id == idHS);
        if (index != -1) {
            this.arrHS.splice(index, 1);
            this.renderHS();
            this.luuLocalHS();
        }
    }
    layThongTinHS(idHS) {
        let stu = this.arrHS.find((item) => item.id == idHS);
        if (stu) {
            document.getElementById('btnThemHS').click();
            let arrInputHS = document.querySelectorAll(
                '#studentForm input, #studentForm textarea'
            );
            for (let item of arrInputHS) {
                let { id } = item;
                item.value = stu[id];
            }
        }
    }
    chinhSuaHS(stu) {
        let index = this.arrHS.findIndex((item) => item.id == stu.id);
        if(index != -1) {
            this.arrHS[index] = stu;
            this.renderHS();
            this.luuLocalHS();
            document.getElementById('btnCloseStu').click();
        }
    }
    timKiemHS(keyword){
        let newKeyWord = removeVietnameseTones(keyword);
        let arrTimKiem =  this.arrHS.filter((item) => {
            let tenHSMoi = removeVietnameseTones(item.ten);
            return tenHSMoi
            .toLowerCase()
            .trim()
            .includes(newKeyWord.toLowerCase().trim());
        });
    }

}