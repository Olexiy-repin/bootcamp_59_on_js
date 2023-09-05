/*
 * Синхронний vs Асинхронний JS
 */

//* setTimeout(callback, delay);

// setTimeout(function () {
//   console.log('Hello from setTimeout 3000ms!');
// }, 3000);

// console.log('First');

// console.log('Second');

// console.log('Third');

// setTimeout(function () {
//   console.log('Hello from setTimeout 1000ms!');
// }, 1000);

//* setInterval(callback, delay);
// const intervalId = setInterval(() => {
//   console.log('Hello from setInterval!');
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5000);

// const timeoutId = setTimeout(() => {
//   console.log('SetTimeout!');
// }, 5000);

// clearTimeout(timeoutId);

// Стек виклику функцій (http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ2ZpcnN0Jyk7CgpzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgewogICAgY29uc29sZS5sb2coJ2lubmVyIHNldFRpbWVvdXQnKTsKfSwgMTAwMCk7Cgpjb25zb2xlLmxvZygnc2Vjb25kJyk7!!!)

// Функції відкладеного виклику window.setTimeout(callback, delay, arg1, arg2, ...);

// Очищення інтервалів та таймутів clearInterval(intervalID), clearTimeout(timeoutID)
