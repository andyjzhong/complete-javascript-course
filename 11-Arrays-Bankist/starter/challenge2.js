const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (arr) => {

  const newData = arr.map(function(dogAge, i, arr) {
    if (dogAge <= 2) {
      return humanAge = 2 * dogAge
    } else {
      return humanAge = 16 + dogAge * 4
    }
  })

  // console.log(newData);

  const filteredData = newData.filter(function(cur, i, arr) {
    return cur >= 18
  })

  // console.log(filteredData);

  const sumOfHumanAges = filteredData.reduce(function(acc, cur, i, arr) {
    // console.log(`Iteration ${i}: ${acc}`)
    return acc += cur
  }, 0)

  const averageAdultHumanAge = sumOfHumanAges / filteredData.length;
  console.log(averageAdultHumanAge);
}

calcAverageHumanAge(data1);
console.log("---------- separator ----------");
calcAverageHumanAge(data2);
