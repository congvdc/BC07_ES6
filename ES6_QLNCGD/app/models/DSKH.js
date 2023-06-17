import Customer from "./Customer.js";
import removeVietnameseTones from '../controllers/helper.js';

export default class DSKH {
    constructor() {
        this.arrKH = [];
    }
    themKH(cus) {
        this.arrKH.push(cus);
    }
    renderKH() {
        let content = this.arrKH.map((item, index) => {
            let cus = new Customer();
            
            Object.assign(cus, item);
            let {
                id,
                ten,
                diaChi,
                email,
                tencty,
                hd,
                danhGia,
            } = cus;

            return `
            <tr>
                <td>${id}</td>
                <td>${ten}</td>
                <td>${diaChi}</td>
                <td>${email}</th>
                <td>${tencty}</td>
                <td>${hd}</td>
                <td>${danhGia}</td>
                <td>
                <button class="btn btn-danger" onclick="xoaKH('${id}')">Xóa</button>
                <button class="btn btn-warning" onclick="layThongTinKH('${id}')">Sửa</button>
                </td>
            </tr>
            `;
        });
        document.getElementById('tbodyCustomer').innerHTML = content.join('');
    }
    luuLocalKH() {
        localStorage.setItem('arrKH', JSON.stringify(this.arrKH));
    }
    layLocalKH() {
        let dskhLocal = JSON.parse(localStorage.getItem('arrKH'));
        if (dskhLocal) {
            this.arrKH = [...dskhLocal];
            this.renderKH();
        }
    }
    xoaKH(idKH) {
        let index = this.arrKH.findIndex((item) => item.id == idKH);
        if (index != -1) {
            this.arrKH.splice(index, 1);
            this.renderKH();
            this.luuLocalKH();
        }
    }
    layThongTinKH(idKH) {
        let cus = this.arrKH.find((item) => item.id == idKH);
        if (cus) {
            document.getElementById('btnThemKH').click();
            let arrInputKH = document.querySelectorAll(
                '#customerForm input, #customerForm textarea'
            );
            for (let item of arrInputKH) {
                let { id } = item;
                item.value = cus[id];
            }
        }
    }
    chinhSuaKH(cus) {
        let index = this.arrKH.findIndex((item) => item.id == cus.id);
        if(index != -1) {
            this.arrKH[index] = cus;
            this.renderKH();
            this.luuLocalKH();
            document.getElementById('btnCloseCus').click();
        }
    }
    timKiemKH(keyword){
        let newKeyWord = removeVietnameseTones(keyword);
        let arrTimKiem =  this.arrKH.filter((item) => {
            let tenKHMoi = removeVietnameseTones(item.ten);
            return tenKHMoi
            .toLowerCase()
            .trim()
            .includes(newKeyWord.toLowerCase().trim());
        });
    }
}
