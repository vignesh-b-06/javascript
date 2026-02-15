
const name = "Vignesh";   
let age = 20;            
age = 21;                 


const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);


function greet(user = "Guest") {
    return `Hello ${user}! Welcome.`;
}


console.log(greet(name)); 
console.log(greet());     
