function checkPrime(num) {
  if (num <= 1) {
    return "Not Prime";
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not Prime";
    }
  }

  return "Prime";
}

let number = 7;
console.log(checkPrime(number));
