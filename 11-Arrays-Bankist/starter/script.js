'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function(mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${Math.abs(mov)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html)
  });
}

displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);

const calcDisplayBalance = function(movements) {
  const balance = movements.reduce(function(acc, mov) {
    return acc += mov
  }, 0)

  labelBalance.textContent = `${balance} EUR`
}

calcDisplayBalance(account1.movements)

const createUsernames = function (accs) {

  accs.forEach(function(acc) {
    acc.username = acc.owner
    .toLowerCase().split(" ").map(name => name[0]).join("");
  })

}

createUsernames(accounts);
// console.log(accounts);



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


/////////////////////////////////////////////////

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function(mov, i, arr) {
//   return Math.floor(mov * eurToUsd);
// })

// Refactor for arrow fn
const movementsUSD = movements.map(mov => Math.floor(mov * eurToUsd));

// console.log(movements);
// console.log(movementsUSD);

const movementDescriptions = movements.map((mov, i) => `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`)

// console.log(movementDescriptions);

const deposits = movements.filter(function(mov, i, arr) {
  return mov > 0
})

const withdrawals = movements.filter(function(mov, i, arr) {
  return mov < 0
})
// console.log(movements);
// console.log(deposits);
// console.log(withdrawals);

const balance = movements.reduce(function(acc, cur, i, arr){
  console.log(`Iteration: ${i}: ${acc}`);
  return acc += cur
}, 0)

// console.log(balance);

// Ex. Get maximum value of movements array. Can still use reduce.
const max = movements.reduce(function(acc, cur) {
  if (cur > acc) {
    acc = cur
  }
  return acc
}, 0)

console.log(max);
