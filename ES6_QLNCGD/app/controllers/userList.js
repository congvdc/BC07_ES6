import Person from "../models/Person";
import DSUsers from "../models/DSUsers";

let user = new DSUsers();
user.layLocalUser();

document.getElementById('btnThemPer').addEventListener('click', () => {
    let arrInput = document.querySelectorAll(
      '#personForm input, #personForm select, #personForm textarea'
    );
    let user = new Person();
    for (let item of arrInput) {
      let { id, value } = item;
      user[id] = value;
    }
    user.themUser(user);
    user.renderUser();
    user.luuLocal();
    document.getElementById('btnClosePer').click();
  });
  
  window.xoaUser = (id) => {
    user.xoaUser(id);
  };
  
  window.layThongTinUser = (id) => {
    user.layThongTinUser(id);
  };
  
  document.getElementById('btnCapNhatPer').onclick = () => {
    // lấy dữ liệu người dùng
    let arrInput = document.querySelectorAll(
        '#personForm input, #personForm select, #personForm textarea'
    );
    let user = new Person();
    // dùng vòng lặp để lấy dữ liệu từ arrInput và thêm vào đối tượng món ăn
    for (let item of arrInput) {
      let { id, value } = item;
      user[id] = value;
    }
    user.chinhSuaUser(id);
  };
  
  window.timKiemUser = (event) => {
    let value = event.target.value;
    console.log(value);
    user.timKiemUser(value);
  };
  