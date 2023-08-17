/*
 * Автоматичне приведення типів
 */
// console.log(2 + 5 + '' + 1 + 0);
// console.log('' + 1 - 0);
// console.log(true + false);
// console.log(6 / '3');
// console.log('2' + '3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' - 2);
// console.log(7 / 0);
// console.log('  -9  ' + 5);
// console.log(null + 1);
// console.log(6 + true);

/*
 * Області видимості
 */

// if (true) {
//   if (true) {
//     const str = 'Hi!';

//     console.log(str);
//   }
// }

/*
 * Змінні створені через var
 */

// if (true) {
//   var str = 'Hello!';
// }

// console.log(str);

// for (var i = 0; i < 5; i += 1) {
//   console.log('Hi!');
// }

// console.log(i);

// var user = {
//   firstName: 'Oleksii',
// };

// var user = {
//   firstName: 'Alexander',
// };

// console.log(user);

// function fn() {
//   var number = 10;
// }

// console.log(number);

/*
 * Call stack
 */

// const fn1 = function () {
//   console.log('fn1');

//   fn2();
// };

// const fn2 = function () {
//   console.log('fn2');

//   fn3();
// };

// const fn3 = function () {
//   console.log('fn3');
// };

// fn1();

/*
? Напиши скрипт управління особистим кабінетом інтернет-банку.
? Є об'єкт account, в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
?
? Типів транзакцій лише два:
? Можна покласти чи зняти гроші з рахунку.
?
? Кожна транзакція це об'єкт із властивостями: id, type та amount
*/

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// const account = {
//   // Поточний баланс рахунку
//   balance: 0,
//   // Початковий ID для транзакції
//   startId: 0,

//   // Історія транзакцій
//   transactions: [],

//   // Генерація ID для транзакції
//   generateId() {
//     return (this.startId += 1);
//   },

//   /*
//    * Метод створює та повертає об'єкт транзакції.
//    * Приймає суму та тип транзакції.
//    */
//   createTransaction(amount, type) {
//     const transaction = {
//       amount,
//       type,
//       id: this.generateId(),
//     };

//     return transaction;
//   },

//   /*
//    * Метод, що відповідає за додавання суми до балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransacon для створення об'єкта транзакції
//    * після чого додає його в історію транзакцій
//    */
//   deposit(amount) {
//     if (amount <= 0) {
//       console.log(`Сумма транзакцiї має бути бiльше чим 0`);

//       return;
//     }

//     this.balance += amount;

//     this.transactions.push(this.createTransaction(amount, 'deposit'));
//   },

//   /*
//    * Метод, що відповідає за зняття суми з балансу.
//    * Приймає суму танзакції.
//    * Викликає createTransaction для створення об'єкта транзакції
//    * Після чого додає його в історію транзакцій.
//    *
//    * Якщо amount більше ніж поточний баланс, виводь повідомлення
//    * про те, що зняття такої суми не можливе, недостатньо коштів.
//    */
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log(`Сума транзакції ${amount}, перевищує ваш баланс.`);

//       return;
//     }

//     this.balance -= amount;

//     this.transactions.push(this.createTransaction(amount, 'withdraw'));
//   },

//   /*
//    * Метод, що повертає поточний баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод шукає та повертає об'єкт транзації по id
//    */
//   getTransactionDetails(id) {
//     for (const transaction of this.transactions) {
//       if (id === transaction.id) {
//         return transaction;
//       }
//     }

//     return `Вибачте, транзакції ${id} не існує!`;
//   },

//   /*
//    * Метод повертає кількість коштів
//    * певного типу транзакції з усієї історії транзакцій
//    */
//   getTransactionTotal(type) {
//     let transactionTotal = 0;

//     for (let transaction of this.transactions) {
//       if (type === transaction.type) {
//         transactionTotal += transaction.amount;
//       }
//     }

//     return transactionTotal;
//   },
// };

// account.deposit(200);
// account.deposit(200);
// account.deposit(200);
// account.deposit(-100);

// account.withdraw(100);
// account.withdraw(100);
// account.withdraw(100);

// console.log(account.getTransactionDetails(5));

// console.log(account.getBalance());

// console.log(account);

// console.log(account.getTransactionTotal('deposit'));
// console.log(account.getTransactionTotal('withdraw'));

// Перебор обʼєкта через Object.keys() та цикл for...of
// const user = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
//   age: 34,
// };

// const userKeys = Object.key(user);

// console.log(userKeys);

// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

// console.log(user);

function logFunction(userInfo) {
  const { firstName, lastName, email, age } = userInfo;

  console.log(firstName);
}

logFunction({
  firstName: 'Oleksii',
  lastName: 'Repin',
  email: 'test@gmail.com',
  age: 35,
});
