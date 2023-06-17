import Person from "../models/Person.js";

export default class Employee extends Person {
    constructor(id, ten, diaChi, email, loai) {
        super(id, ten, diaChi, email, loai);
        this.soNgay = '';
        this.luong = '';
        this.loai = loai = 'loai2'
    }

    tinhLuong = () => {
        return (this.soNgay * 1 * this.luong * 1);
    }
}