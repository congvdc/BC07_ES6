import Person from "../models/Person.js";

export default class Customer extends Person {
    constructor() {
        super();
        this.tencty='';
        this.hd='';
        this.danhGia='';
        this.loai = 'loai3';
    }
    
}