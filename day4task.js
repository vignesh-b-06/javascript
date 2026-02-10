let numbers = [2, 5, 8, 12, 15];

// map 
let doubled = numbers.map(function(num) {
    return num * 2;
});
console.log("Doubled:", doubled);

//filter
let evens = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even numbers:", evens);

//reduce
let sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);
console.log("Sum:", sum);

//Find
let firstGreater = numbers.find(function(num) {
    return num > 10;
});
console.log("First number > 10:", firstGreater);

//includes
console.log("Includes 8:", numbers.includes(8));
console.log("Includes 20:", numbers.includes(20));
