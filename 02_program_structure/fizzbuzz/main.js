let number = 1;
let endingNumber = 100;

for (; number <= endingNumber; number++) {
  if (number % 3 === 0) console.log("Fizz");
  else if (number % 5 === 0) console.log("Buzz");
  else console.log(number);
}
