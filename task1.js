
let studName = "John";
let score = 65;

console.log(studName);
console.log(score);



let studName2 = "John";
let score2 = 65;

if (score2 >= 50) {
    console.log("Passed");
} else {
    console.log("Failed");
}




function greet(studName) {
    
    return "Hello " + studName;
}


console.log(greet("John"));



let scores = [75, 60, 90, 45];


console.log(scores[0]);


console.log(scores.length);


let scores2 = [75, 60, 90, 45];

for (let i = 0; i < scores2.length; i++) {
    console.log(scores2[i]);
}



let student = {
    name: "John",
    age: 20,
    grade: "A"
};


console.log(student.name);
console.log(student.age);
