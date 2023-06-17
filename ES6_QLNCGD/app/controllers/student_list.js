import Student from "../models/Student.js";
import DSHS from "../models/DSHS.js";

// Student
let dshs = new DSHS();
dshs.layLocalHS();

document.getElementById('btnThemStu').addEventListener('click', () => {
    let arrInputHS = document.querySelectorAll
        (
            '#studentForm input, #studentForm textarea'
        );
    let stu = new Student();
    for (let item of arrInputHS) {
        let { id, value } = item;
        stu[id] = value;
    }
    dshs.themHS(stu);
    dshs.renderHS();
    dshs.luuLocalHS();
    document.getElementById('btnCloseStu').click();
});
window.xoaHS = (idHS) => {
    dshs.xoaHS(idHS);
};
window.layThongTinHS = (idHS) => {
    dshs.layThongTinHS(idHS);
};
document.getElementById('btnCapNhatStu').onclick = () => {
    let arrInputHS = document.querySelectorAll(
        '#studentForm input, #studentForm textarea'
    );
    let stu = new Student();
    for (let item of arrInputHS) {
        let { id, value } = item;
        stu[id] = value;
    }
    dshs.chinhSuaHS(stu);
};
window.timKiemHS = (event) => {
    let value = event.target.value;
    dshs.timKiemSH(value);
};