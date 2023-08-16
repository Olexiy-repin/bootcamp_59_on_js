/*
 * Операція spread замість concat і slice
 */

//* Копія масива
//* Через метод slice()
// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = numbers.slice();

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// numbersCopy.push(10);

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

//* Через метод concat()
// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = numbers.concat();

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// numbersCopy.push(10);

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

//* Через ...spread
// const numbers = [1, 2, 3, 4, 5];
// const numbersCopy = [...numbers];

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

// numbersCopy.push(10);

// console.log('numbers: ', numbers);
// console.log('numbersCopy: ', numbersCopy);

//* Об'єднання масивів
// const numbers = [1, 2, 3, 4];
// const anotherNumbers = [10, 9, 8, 7];
// const allNumbers = [100, ...numbers, 50, 60, ...anotherNumbers, 200];

// console.log('allNumbers: ', allNumbers);

//* Розпилення масиву у функцію
// const numbers = [1, 2, 33, 4, 5];

// console.log(Math.min(...numbers));

/*
 * Операція spread замість Object.assign({}, obj)
 */
// Через Object.assign()
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const userCopy = Object.assign({ gender: 'male' }, user);

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// userCopy.age = 40;

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// Через ...spread
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
// };
// const userCopy = {
//   email: 'test@gmail.com',
//   firstName: 'Oleksii',
//   ...user,
//   gender: 'male',
// };

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// userCopy.age = 40;

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

//* Розпилення складних типів
// const user = {
//   firstName: 'Jonathan',
//   lastName: 'Barnett',
//   age: 30,
//   someArr: [1, 2, 3, 4],
// };
// const userCopy = _.cloneDeep(user);

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// userCopy.age = 40;
// userCopy.someArr.push(10);

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

/*
 * Операція rest
 */

//? Напишіть функцію sum, яка складає довільну кількість аргументів
// const sum = function (...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 40, 60));
// console.log(sum(10, 40, 60, 100, 200, 300, 4000, 5));
