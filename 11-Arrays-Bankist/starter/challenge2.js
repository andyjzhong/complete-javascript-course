const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (arr) => {

  const newData = arr.map((dogAge) => dogAge <= 2 ? humanAge = 2 * dogAge : humanAge = 16 + dogAge * 4)

  const filteredData = newData.filter(cur => cur >= 18)

  const sumOfHumanAges = filteredData.reduce((acc, cur) => (acc += cur), 0)

  const averageAdultHumanAge = sumOfHumanAges / filteredData.length;
  console.log(averageAdultHumanAge)
}

calcAverageHumanAge(data1);
console.log("---------- separator ----------");
calcAverageHumanAge(data2);
