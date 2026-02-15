let arr = [5, 2, 9, 1, 7];

let largest = arr[0];
let smallest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }

  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}

console.log("Largest:", largest);
console.log("Smallest:", smallest);
