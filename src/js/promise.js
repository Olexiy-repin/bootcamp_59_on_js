/*
 * Проміси
 */

// const promise = new Promise((resolve, reject) => {
//   console.log('Hello from Promise!');

//   setTimeout(() => {
//     const randNumber = Math.random();

//     if (randNumber <= 0.5) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 1000);
// });

// console.log(promise);

// promise
//   .then(result => {
//     console.log(promise);

//     console.log(result);

//     return result + '!!!!!';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(promise);

//     console.log(err);
//   })
//   .finally(() => {
//     console.log('Hello from finally!');
//   });

//? конструктор new Promise(callback(resolve, reject));

//? then(onSuccess, onError)

//? ланцюжок промісів та catch(onError)

//? finally()

//? TASK 01
// Чи можна "перевиконати" проміс?
// const promise = new Promise((resolve, reject) => {
//   resolve(1);

//   setTimeout(() => {
//     resolve(2);
//   }, 1000);
// });

// promise.then(result => {
//   console.log(result);
// });

//? TASK 02
// Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// console.log(promise);

// promise
//   .then(data => {
//     console.log(data); // '1'
//   })
//   .then(data => {
//     console.log(data); // undefined

//     return '2';
//   })
//   .then(data => {
//     console.log(data); // '2'
//   });

//? TASK 03
// Що буде у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// console.log(promise);

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);
//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   });
