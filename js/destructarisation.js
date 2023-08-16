/*
 * Деструктуризація об'єктів
 */

// const user = {
//   firstName: 'John',
//   lastName: 'Reese',
//   age: 30,
//   isAdmin: true,
// };

/*
? Напишіть деструктуруюче присвоєння, яке:
? властивість firstName присвоє до змінної firstName.
? властивість lastName присвоє до змінної lastName.
? властивість age присвоє до змінної userAge.
? властивість isAdmin присвоє до змінної isAdmin (false, якщо немає такої властивості)
*/

// const { firstName, lastName, age: userAge, isAdmin = false } = user;

// console.log(firstName);
// console.log(lastName);
// console.log(userAge);
// console.log(userIsAdmin);

/*
 * Глибока деструктуризація об'єктів
 */
// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

// const {
//   number: teamNumber,
//   flag,
//   langs: { original: originalLang, secondary: secondaryLang },
// } = team;

// console.log(teamNumber);
// console.log(flag);
// console.log(originalLang);
// console.log(secondaryLang);

/*
 * Деструктуризація масивів
 */
// const names = ['Herbert Todd', 'Belle Soto', 'Roger Marsh', 'Ethan Lindsey'];

// const [name1, , name3] = names;

// console.log(name1);
// console.log(name3);

// const rgb = [200, 100, 50];

// const [red, green, blue] = rgb;

// console.log(red);
// console.log(green);
// console.log(blue);
