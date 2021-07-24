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

  console.log(newData);
}

calcAverageHumanAge(data1);
calcAverageHumanAge(data2);
