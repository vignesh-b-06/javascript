//function to add two numbers 
let a = 10;
let b = 20;
function add(){
    console.log(a+b);
}
add()
// fucntion expression
let mul=function(a,b){
    console.log(a * b);
}
mul(3,4);
//arrow function
let sub=(a,b)=>{
    console.log(a-b);
}
sub(20,7);
//parameters and return
function addition(a,b){
    return a+b;
}
console.log(add(5,7));
//array functions
let arr = [1,2,3,4,5]
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);
//print elements of an array
let array=[10,20,30,40]
for(let i = 0; i<array.length;i++){
    console.log(array[i]);
}
