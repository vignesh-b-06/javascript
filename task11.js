class student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log("Name:",this.name);
        console.log("Age:",this.age);
    }
}
let s1 = new student("Vicky",20);
s1.display();