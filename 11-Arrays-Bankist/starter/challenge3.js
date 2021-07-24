const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = arr =>
  arr
  .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
  .filter(cur => cur >= 18)
  .reduce((acc, cur, i, arr) => acc + cur / arr.length, 0)


console.log(calcAverageHumanAge(data1));
console.log("---------- separator ----------");
console.log(calcAverageHumanAge(data2));
