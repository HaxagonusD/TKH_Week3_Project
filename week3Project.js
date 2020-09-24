//1 to 10 printed
const printOneTen = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i + 1);
  }
};
//3 to 103 odd numbers array
const oddNumbersArray = () => {
  let array = [];
  let iterator = 3;
  while (iterator <= 103) {
    array.push(iterator);
    iterator += 2;
  }
  console.log(array);
  return array;
};
//sum of array
const arraySum = (num) => num.reduce((x, y) => x + y);
//9 to 0
const displayNineZero = () => {
  for (let i = 9; i >= 0; i--) {
    console.log(i);
  }
};
//factorial of n
const factorial = (n) => (n ? n * factorial(n - 1) : 1);

const sigma = (n) => {
  let contain = 0;
  for (let i = 1; i < n + 1; i++) {
    contain += i;
  }
  return contain;
};

const capitalZ = (string) =>
  string
    .split("")
    .map((character, index, array) => (index % 2 === 0 ? character : "Z"))
    .join("");

console.log(capitalZ("elses that they said"));
