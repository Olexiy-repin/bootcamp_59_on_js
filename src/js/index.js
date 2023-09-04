//? Формат JSON
// import usersData from '../json/userDb.json';

// console.log(usersData);

// const user = {
//   firstName: 'Oleksii',
//   age: 30,

//   getFirstName() {
//     return this.firstName;
//   },
// };

// const jsonUser = JSON.stringify(user);

// console.log(user);
// console.log(jsonUser);

//? Конструкція try...catch для обробки помилок

// console.log('First!');

// try {
//   const data = JSON.parse('Well, this is awkward');

//   console.log(data);
// } catch (err) {
//   console.log(err);
// }

// console.log('End!');

//? Робота з localStorage

// const user = {
//   firstName: 'Oleksii',
// };

// const jsonUser = JSON.stringify(user);

// localStorage.setItem('userData', jsonUser);

// localStorage.setItem('test', '[1,2,3,4,5]');

// console.log(localStorage.getItem('userData'));

// localStorage.removeItem('test');
// localStorage.removeItem('userData');

// sessionStorage.setItem('userData', jsonUser);
