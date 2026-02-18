class Person {
    constructor() {
        this._name = "";
    }

    
    set name(value) {
        this._name = value;
    }

   
    get name() {
        return this._name;
    }
}

let p1 = new Person();

p1.name = "Vignesh";


console.log(p1.name);
