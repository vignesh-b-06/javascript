let person={
    name:"Vignesh",
    age:21,
    sayHello:function(){
        console.log("Hello");
    }
};
console.log(person.name);
console.log(person.age);
person.age=22;
person.name="Vicky";
console.log(person.name);
console.log(person.age);
person.sayHello();