class Person{
    #name="John";//if we use hash it becomes private.
    display(){
        console.log(this.#name);//this function is created to access the private field.this function is used to call the private field
    }
}
let stud = new Person();
stud.display()