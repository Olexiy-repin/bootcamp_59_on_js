/*
? У нас є масив з користувачами. Нехай функція getPasportsInfo(users), збирає паспортні номери до окремого масиву.
*/

// const users = [
//   { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//   { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//   { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//   { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//   { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//   { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
// ];

// const getPasportsInfo = users => {
//   return users.map((user, idx, arr) => {
//     return user.passport;
//   });
// };

// console.log(getPasportsInfo(users));

/*
? Напишіть функцію filterRange(arr, a, b), яка приймає масив arr, шукає в ньому елементи більші-рівні a та менші-рівні b і віддає масив цих елементів.
? Функція повинна повертати новий масив і не змінювати вихідний.
*/

// const arr = [5, 3, 8, 1];

// const filterRange = (arr, a, b) => {
//   return arr.filter(el => el >= a && el <= b);
// };

// console.log(filterRange(arr, 2, 5));

/*
? Напишіть функцію sortByAge(users), яка приймає масив обʼєктів з властивістю age і сортує їх по ньому.
*/

// const users = [
//   { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//   { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//   { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//   { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//   { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//   { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
// ];

// const sortByAge = users => {
//   return [...users].sort((a, b) => a.age - b.age);
// };

// console.table(sortByAge(users));

/*
? Напишіть функцію getAverageAge(users), яка приймає масив об’єктів з властивістю age та повертає середній вік.
 */
// const users = [
//   { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//   { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//   { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//   { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//   { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//   { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
// ];

// const getAverageAge = users => {
//   const totalAge = users.reduce((total, element) => {
//     return total + element.age;
//   }, 0);

//   return Math.floor(totalAge / users.length);
// };

// console.log(getAverageAge(users));

/*
? Напишіть функцію unique(arr), яка повертає масив, що містить тільки унікальні елементи arr.
*/
// 1 Варіант
// const strings = ['Привіт', 'Світ', 'Привіт', 'Світ', '!', 'Привіт', 'Привіт', 'Світ', 'Світ'];

/*
1 Ітерація

word = 'Привіт';
idx = 0;
arr = ['Привіт', 'Світ', 'Привіт', 'Світ', '!', 'Привіт', 'Привіт', 'Світ', 'Світ'];

arr.indexOf(word) === idx

2 Ітерація

word = 'Світ';
idx = 1;
arr = ['Привіт', 'Світ', 'Привіт', 'Світ', '!', 'Привіт', 'Привіт', 'Світ', 'Світ'];

arr.indexOf(word) === idx

3 Ітерація

word = 'Привіт';
idx = 2;
arr = ['Привіт', 'Світ', 'Привіт', 'Світ', '!', 'Привіт', 'Привіт', 'Світ', 'Світ'];

arr.indexOf(word) === idx

4 Ітерація

word = 'Світ';
idx = 3;
arr = ['Привіт', 'Світ', 'Привіт', 'Світ', '!', 'Привіт', 'Привіт', 'Світ', 'Світ'];

arr.indexOf(word) === idx

5 Ітерація

word = '!';
idx = 4;
arr = ['Привіт', 'Світ', 'Привіт', 'Світ', '!', 'Привіт', 'Привіт', 'Світ', 'Світ'];

arr.indexOf(word) === idx
*/

// const unique = arr => {
//   return arr.filter((word, idx, arr) => {
//     return arr.indexOf(word) === idx;
//   });
// };

// console.log(unique(strings));

// 2 Варіант
// const strings = ['Привіт', 'Світ', 'Привіт', 'Світ', '!', 'Привіт', 'Привіт', 'Світ', 'Світ'];

// const unique = arr => {
//   const uniqueStrings = [];

//   arr.forEach((el, idx) => {
//     if (idx === 0) {
//       uniqueStrings.push(el);

//       return;
//     }

//     if (uniqueStrings.includes(el)) {
//       return;
//     }

//     uniqueStrings.push(el);
//   });

//   return uniqueStrings;
// };

// console.log(unique(strings));

/*
? Напишіть функцію unique(arr), яка повертає масив, що містить тільки унікальні елементи arr.
*/

// let users = [
//   { id: 1, firstName: 'Іван', lastName: 'Іванко', age: 30 },
//   { id: 1, firstName: 'Іван', lastName: 'Іванко', age: 30 },
//   { id: 1, firstName: 'Іван', lastName: 'Іванко', age: 30 },
//   { id: 2, firstName: 'Ганна', lastName: 'Іванко', age: 30 },
//   { id: 2, firstName: 'Ганна', lastName: 'Іванко', age: 30 },
//   { id: 3, firstName: 'Петро', lastName: 'Петренко', age: 40 },
// ];

/*
1 Ітерація
user = { id: 1, firstName: 'Іван', lastName: 'Іванко', age: 30 };
idx = 0;
arr = users;

  arr.findIndex(obj => user.id === obj.id) === idx
  1 Ітерація
  obj = { id: 1, firstName: 'Іван', lastName: 'Іванко', age: 30 };
  user.id === obj.id

2 Ітерація
user = { id: 1, firstName: 'Іван', lastName: 'Іванко', age: 30 };
idx = 1;
arr = users;

  arr.findIndex(obj => user.id === obj.id) === idx
  1 Ітерація
  obj = { id: 1, firstName: 'Іван', lastName: 'Іванко', age: 30 };
  1 === 1;
*/

// const transformUserNameToFullName = users => {
//   return users.filter((user, idx, arr) => {
//     return arr.findIndex(obj => user.id === obj.id) === idx;
//   });
// };

// console.log(transformUserNameToFullName(users));

/*
? Створіть функцію groupById(arr), яка створює з масиву об’єкт із ключом id та елементами масиву як значеннями.
*/
// 1 Варіант
// let users = [
//   { id: 'іван', name: 'Іван Іванко', age: 20 },
//   { id: 'ганна', name: 'Ганна Іванко', age: 24 },
//   { id: 'петро', name: 'Петро Петренко', age: 31 },
// ];

// const groupById = users => {
//   return users.reduce((obj, user, idx, arr) => {
//     obj[user.id] = user;
//     return obj;
//   }, {});
// };

// console.log(groupById(users));

// 2 Варіант
// let users = [
//   { id: 'іван', name: 'Іван Іванко', age: 20 },
//   { id: 'ганна', name: 'Ганна Іванко', age: 24 },
//   { id: 'петро', name: 'Петро Петренко', age: 31 },
// ];

// const groupById = users => {
//   const userInfo = {};

//   users.forEach((el, idx, arr) => (userInfo[el.id] = el));

//   return userInfo;
// };

// console.log(groupById(users));

// після виклику функції ви повинні отримати:
// usersById = {
//   іван: {id: 'іван', name: "Іван Іванко", age: 20},
//   ганна: {id: 'ганна', name: "Ганна Іванко", age: 24},
//   петро: {id: 'петро', name: "Петро Петренко", age: 31},
// }

/*
? Напишіть функцію transformUsersNameToFullName(users), яка створить ще один масив обʼєктів з параметрами id, fullName та age.
? fullName – складається з firstName та lastName.
*/

let users = [
  { id: 1, firstName: 'Іван', lastName: 'Іванко', age: 30 },
  { id: 2, firstName: 'Ганна', lastName: 'Іванко', age: 30 },
  { id: 3, firstName: 'Петро', lastName: 'Петренко', age: 40 },
];

const transformUsersNameToFullName = users => {
  return users.map((user, idx, arr) => {
    const { firstName, lastName, ...otherProps } = user;

    return {
      fullName: `${firstName} ${lastName}`,
      ...otherProps,
    };
  });
};

console.log(transformUsersNameToFullName(users));
