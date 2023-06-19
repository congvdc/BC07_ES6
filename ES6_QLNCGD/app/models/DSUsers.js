import Person from "./Personn";
import removeVietnameseTones from '../controllers/helper.js';

export default class DSUsers {
    constructor () {
        this.arrPerson = [];
    }
    themUser(user) {
        this.arrPerson.push(user);
    }
    renderUser() {
        let content = this.arrPerson.map((item, index) => {       
            let user = new Person();
            Object.assign(user, item);

            let {
                id,
                ten,
                diaChi,
                email,
                loai,
            } = user;

            return `
            <tr>
                <td>${id}</td>
                <td>${ten}</td>
                <td>${diaChi}</td>
                <td>${email}</th>
                <td>${loai}</td>
                <td>
                <button class="btn btn-danger" onclick="xoaUser('${id}')">Xóa</button>
                <button class="btn btn-warning" onclick="layThongTinUser('${id}')">Sửa</button>
                </td>
            </tr>
            `;
        });
        document.getElementById('tbodyPerson').innerHTML = content.join('');
    }
    luuLocalUser() {
        localStorage.setItem('arrPerson', JSON.stringify(this.arrPerson));
    }
    layLocalUser() {
        let userLocal = JSON.parse(localStorage.getItem('arrPerson'));
        if (userLocal) {
            this.arrPerson = [...userLocal];
            this.renderUser();
        }
    }
    xoaUser(idUser) {
        let index = this.arrPerson.findIndex((item) => item.id == idUser);
        if (index != -1) {
            this.arrPerson.splice(index, 1);
            this.renderUser();
            this.luuLocalUser();
        }
    }
    layThongTinUsser(idUser) {
        let user = this.arrPerson.find((item) => item.id == idUser);
        if (user) {
            document.getElementById('btnThemUser').click();
            let arrInputUser = document.querySelectorAll(
                '#personForm input, #personForm textarea, #personForm select'
            );
            for (let item of arrInputUser) {
                let { id } = item;
                item.value = user[id];
            }
        }
    }



    chinhSuaUser(user) {
        let index = this.arrPerson.findIndex((item) => item.id == user.id);
        if(index != -1) {
            this.arrPerson[index] = user;
            this.renderUser();
            this.luuLocalUser();
            document.getElementById('btnCloseUser').click();
        }
    }
    timKiemUser(keyword){
        let newKeyWord = removeVietnameseTones(keyword);
        let arrTimKiem =  this.arrPerson.filter((item) => {
            let tenUserMoi = removeVietnameseTones(item.ten);
            return tenUserMoi
            .toLowerCase()
            .trim()
            .includes(newKeyWord.toLowerCase().trim());
        });
    }
}