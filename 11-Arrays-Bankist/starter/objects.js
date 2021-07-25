const menu = [
  {
    name: "hotdog",
    price: 5
  },
  {
    name: "burger",
    price: 6
  },
  {
    name: "fries",
    price: 3
  }
]

let order = menu
  .map(item => item.price)
  .reduce(function(acc, cur, i, arr) {
    return acc + cur
  }, 0)

console.log(order);
