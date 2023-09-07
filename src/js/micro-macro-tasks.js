// http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!

// console.log('Start!');

// setTimeout(() => {
//   console.log('Hello from setTimeout!');
// }, 0);

// const promise = new Promise((resolve, reject) => {
//   console.log('Hello from class Promise!');

//   setTimeout(() => {
//     resolve('Done!');
//   }, 2000);
// });

// promise.then(result => {
//   console.log(result);
// });

// console.log('End!');

//? TASK 01
// console.log(1);

// setTimeout(() => console.log(2), 0);

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4), 0));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6), 0);

// console.log(7);

//? TASK 02

//? Лічильник через рекурсію
// const counterOutputEl = document.querySelector('.js-counter');
// let i = 0;

// const count = () => {
//   i += 100;

//   counterOutputEl.innerHTML = i;

//   if (i !== 10000) {
//     setTimeout(count, 10);
//   }
// };

// count();

//? Лічильник через setInterval
// const counterOutputEl = document.querySelector('.js-counter');
// let intervalId = null;
// let i = 0;

// const count = () => {
//   i += 10;

//   counterOutputEl.innerHTML = i;

//   if (i === 1000) {
//     clearInterval(intervalId);
//   }
// };

// intervalId = setInterval(count, 100);
