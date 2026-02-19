class Parent{
    constructor(name,age){
        this._name=name;
        this._age=age;
    }
    display(){
        console.log(this._name);
        console.log(this._age);
    }
}
 let obj = new Parent("Vignesh",20)
 obj.display()
 class child extends Parent{
    constructor(name,age,gender){
        super(name,age);
        this._gender=gender;
    }
    dis(){
        console.log(this._gender);
    }
    
 }
 let ob=new child("Vignesh",20,"Male")
 ob.dis()
 ob.display()

