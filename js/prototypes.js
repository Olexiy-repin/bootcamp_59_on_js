/*
 * Ланцюжки прототипів.
 * Object.create().
 * obj.hasOwnProperty()
 */

// const usersMethods = {
//   changeFirstName(newFirstName) {
//     this.firstName = newFirstName;
//   },

//   getAge() {
//     return this.age;
//   },
// };

// const user1 = Object.create(usersMethods);

// user1.firstName = 'Oleksii';
// user1.lastName = 'Repin';
// user1.age = 30;

// const user2 = Object.create(usersMethods);

// user2.firstName = 'Beulah';
// user2.lastName = 'Garrett';
// user2.age = 20;

// const user3 = Object.create(usersMethods);

// user3.firstName = 'Timothy';
// user3.lastName = 'Dixon';
// user3.age = 25;

// console.log('user1: ', user1);
// console.log('user2: ', user2);
// console.log('user3: ', user3);

// console.log(user3.getAge());
// console.log(user2.getAge());

// https://learn.javascript.ru/article/native-prototypes/native-prototypes-classes.svg

//* Власні та не власні властивості об'єкта

//* Перевірка власних властивостей obj.hasOwnProperty()
// const user1 = {
//   firstName: 'Oleksii',
//   lastName: 'Repin',
// };

// const user2 = Object.create(user1);

// user2.age = 30;

// console.log('user1: ', user1);
// console.log('user2: ', user2);

// console.log(user2.hasOwnProperty('firstName'));

//* Цикл for...in, перебирає і власні, і не власні властивості.

// for (const key in user2) {
//   if (user2.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }
