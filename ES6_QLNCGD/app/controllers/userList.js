import Person from "../models/Person.js";
import DSUsers from "../models/DSUsers.js";

let dsu = new DSUsers();
dsu.layLocalUser();

document.getElementById('btnThemPer').addEventListener('click', () => {
    let arrInput = document.querySelectorAll(
        '#personForm input, #personForm select, #personForm textarea'
    );
    let per = new Person();
    for (let item of arrInput) {
        let { id, value } = item;
        per[id] = value;
    }
    dsu.themUser(per);
    dsu.renderUser();
    dsu.luuLocalUser();
    document.getElementById('btnClosePer').click();
});

window.xoaUser = (id) => {
    dsu.xoaUser(id);
};

window.layThongTinUser = (id) => {
    dsu.layThongTinUser(id);
};

document.getElementById('btnCapNhatPer').onclick = () => {
    // lấy dữ liệu người dùng
    let arrInput = document.querySelectorAll(
        '#personForm input, #personForm select, #personForm textarea'
    );
    let per = new Person();
    for (let item of arrInput) {
        let { id, value } = item;
        per[id] = value;
    }
    dsu.chinhSuaUser(id);
};

window.timKiemUser = (event) => {
    let value = event.target.value;
    console.log(value);
    dsu.timKiemUser(value);
};
