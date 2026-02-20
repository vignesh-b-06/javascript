let arr = [10, 20, 30, 40, 50];


let sum = arr.reduce(function(total, num) {
    return total + num;
}, 0);
console.log("Sum:", sum);


let value = arr.find(num => num === 30);
console.log("Found value:", value);


let check = arr.includes(20);
console.log("Is 20 present?", check);
