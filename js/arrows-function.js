/*
 * Стрілочні функції, явне - неявне повернення, arguments, повернення об`єкта
 */

//? Два і більше параметрів
// const sum = (a, b) => {
//   return a + b;
// };

// console.log(sum(10, 20));

//? Один параметр
// const greet = firstName => {
//   console.log(`Hello ${firstName}`);
// };

// greet('Oleksii');

//? Без параметрів
// const greet = () => {
//   console.log('Hello!');
// };

// greet();

//? arguments

// const calcAverage = (...args) => {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total / args.length;
// };

// console.log(calcAverage(1, 3, 4, 6));

//? Неявне повернення
// const sum = (a, b) => a + b;

// console.log(sum(10, 20));

// const updateProduct = product => ({ id: Date.now(), ...product });

// console.log(updateProduct({ name: '🍎', price: 30, quantity: 3 }));

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// const createProduct = (partialProduct, callback) => {
//   const product = { id: Date.now(), ...partialProduct };

//   callback(product);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = product => console.log(product.price * product.quantity);

// createProduct({ name: '🍎', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: '🍋', price: 20, quantity: 5 }, logTotalPrice);

/*
? Виконайте рефакторинг коду за допомогою стрілочних функцій.
*/

// const each = (array, callback) => {
//   const newArr = [];

//   for (const el of array) {
//     newArr.push(callback(el));
//   }

//   return newArr;
// };

// Повна версія стрілочної функції
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value * 2;
//   })
// );
// Скорочена версія стрілочної функції з неявним поверненям
// console.log(each([64, 49, 36, 25, 16], value => value * 2));

// Повна версія стрілочної функції
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return value - 10;
//   })
// );
// Скорочена версія стрілочної функції з неявним поверненям
// console.log(each([64, 49, 36, 25, 16], value => value - 10));

// Повна версія стрілочної функції
// console.log(
//   each([64, 49, 36, 25, 16], value => {
//     return Math.sqrt(value);
//   })
// );
// Скорочена версія стрілочної функції з неявним поверненям
// console.log(each([64, 49, 36, 25, 16], value => Math.sqrt(value)));

// Повна версія стрілочної функції
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.ceil(value);
//   })
// );
// Скорочена версія стрілочної функції з неявним поверненям
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.ceil(value)));

// Повна версія стрілочної функції
// console.log(
//   each([1.5, 2.1, 16.4, 9.7, 11.3], value => {
//     return Math.floor(value);
//   })
// );
// Скорочена версія стрілочної функції з неявним поверненям
// console.log(each([1.5, 2.1, 16.4, 9.7, 11.3], value => Math.floor(value)));
