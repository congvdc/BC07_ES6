import Person from "../models/Person.js";

export default class Customer extends Person {
    constructor(id, ten, diaChi, email, loai) {
        super(id, ten, diaChi, email, loai);
        this.tencty='';
        this.hd='';
        this.danhGia='';
        this.loai = loai ='loai3';
    }
    
}