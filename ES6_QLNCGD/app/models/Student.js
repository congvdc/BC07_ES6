import Person from "../models/Person.js";

export default class Student extends Person {
    constructor(id, ten, diaChi, email, loai) {
        super(id, ten, diaChi, email, loai);
        this.toan = '';
        this.ly = '';
        this.hoa = '';
        this.loai = loai = 'loai1';
    }

    diemTrungBinh = () => {
        return (this.toan * 1 + this.ly * 1 + this.hoa * 1) / 3;
    };
}