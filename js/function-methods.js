/*
 *  Методи функцій call та apply
 */

//* Функції це об'єкти зі своїми властивостями та методами
// const greet = function () {
//   console.log('Hello');
// };

// console.dir(greet);

//* call та apply
//? Викличте функцію showFullName у контексті об'єкта user
// const showFullName = function (message) {
//   console.log(`${message} ${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// showFullName.call(user, 'Hello');
// showFullName.apply(user, ['Hello']);

//? Викличте функцію showFullName у контексті об'єкта anotherUser
// const anotherUser = {
//   firstName: 'Marvin',
//   lastName: 'Jordan',
//   age: 30,
// };

// showFullName.call(anotherUser, 'Hi');
// showFullName.apply(anotherUser, ['Hi']);

//* bind
// const showFullName = function () {
//   console.log(`${this.firstName} ${this.lastName}`);
// };

// const user = {
//   firstName: 'Ernest',
//   lastName: 'Vasquez',
//   age: 30,
// };

// const showUserFullName = showFullName.bind(user);

// showUserFullName();

//* Метод об'єкта у ролі колбека
// const user = {
//   name: 'Luis',
//   age: 30,

//   showThis() {
//     console.log(`this ---->`, this);
//   },

//   showName() {
//     console.log(`this name is: ${this.name}`);
//   },
// };

// const someFunction = function (callback) {
//   callback();
// };

// someFunction(user.showName.bind(user));

/*
? Що виведе код?
*/

// const f = function () {
//   console.log(this.name);
// };

// const user = {
//   name: 'Василь',
// };

// const anotherUser = {
//   name: 'Петро',
// };

// const copyFunc = f.bind(user).bind(anotherUser);

// copyFunc();

/*
? Виклик checkPassword() у наведеному нижче коді повинен перевірити пароль та викликати user.loginOk/loginFail залежно від відповіді.
? Однак його виклик призводить до помилки. Чому?
 */

// const checkPassword = function (ok, fail) {
//   const password = 'rockstar';

//   if (password === 'rockstar') {
//     ok();
//   } else {
//     fail();
//   }
// };

// const user = {
//   name: 'Василь',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// checkPassword(user.loginOk.bind(user), user.loginFail.bind(user));
