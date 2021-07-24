const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];


const checkDogs = (dogsJulia, dogsKate) => {
  let dogsJuliaReal = [...dogsJulia]

  const removeCats = (dogsJulia) => {
    // console.log("BEFORE:::", dogsJuliaReal);
    dogsJuliaReal.shift()
    dogsJuliaReal.splice(-2, 2)
    // console.log("AFTER:::", dogsJuliaReal);
  }

  removeCats([3, 5, 2, 12, 7])

  const allDogs = dogsJuliaReal.concat(dogsKate);
  // console.log(allDogs);

  allDogs.forEach(function(dog, i) {
    if (dog >= 3) {
      // console.log("Adult");
      console.log(`Dog number ${i + 1} is an adult`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy`);
    }
  });
}

checkDogs(dogsJulia, dogsKate);
checkDogs(dogsJulia2, dogsKate2);
