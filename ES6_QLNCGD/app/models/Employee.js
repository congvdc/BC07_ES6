import Person from "../models/Person.js";

export default class Employee extends Person {
    constructor() {
        super();
        this.soNgay = '';
        this.luong = '';
        this.loai = 'loai2';
    }

    tinhLuong = () => {
        return (this.soNgay * 1 * this.luong * 1);
    }
}