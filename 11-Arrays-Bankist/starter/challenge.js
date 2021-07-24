dogsJulia = [3, 5, 2, 12, 7];
dogsKate = [4, 1, 15, 8, 3];

let dogsJuliaReal = [...dogsJulia]

const removeCats = (dogsJulia) => {
  console.log("BEFORE:::", dogsJuliaReal);
  dogsJuliaReal.shift()
  dogsJuliaReal.splice(-2, 2)
  console.log("AFTER:::", dogsJuliaReal);
}

removeCats([3, 5, 2, 12, 7])

const allDogs = dogsJuliaReal.concat(dogsKate);
console.log(allDogs);

//
//
// const checkDogs (dogsJulia, dogsKate) => {
//
// }
//
// if dogs age >= 3 ? adult : puppy
//
//
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
