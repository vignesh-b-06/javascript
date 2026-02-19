

//Synchronous
console.log("Synchronous Task 1");
console.log("Synchronous Task 2");

//Asynchronous
setTimeout(() => {
    console.log("This message is printed after 2 seconds");
}, 2000);

let count = 1;

let interval = setInterval(() => {
    console.log("Counter:", count);
    count++;

    if (count > 5) {
        clearInterval(interval);
        console.log("Counter Stopped");
    }
}, 1000);

console.log("Program End");
