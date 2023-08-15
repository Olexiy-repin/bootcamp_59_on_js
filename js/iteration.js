/*
 * for...in, Object.keys, Object.values
 */

//? Отримайте суму зарплат усіх працівників
// Через цикл for...in
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let total = 0;

// for (const key in salaries) {
//   total += salaries[key];
// }

// console.log(total);

// Через Object.keys() та for...of
// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// };
// const salariesKeys = Object.keys(salaries);

// let total = 0;

// for (const key of salariesKeys) {
//   total += salaries[key];
// }

// console.log(total);

// Через Object.values() та for...of
const salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
const salariesValues = Object.values(salaries);

let total = 0;

for (const salary of salariesValues) {
  total += salary;
}

console.log(total);
