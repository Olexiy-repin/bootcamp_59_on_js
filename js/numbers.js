/*
 * Математичні оператори (+, -, *, /, %, **)
 */

/*
 ? Дано два числа 20 та 10.
 ? Проведіть над цими числами математичні операції (+ - / * %).
*/
// const numA = 20;
// const numB = 10;

// const sum = numA + numB;
// console.log(sum);

// const division = numB - numA;
// console.log(division);

// const multiply = numA * numB;
// console.log(multiply);

// const subtraction = numB / numA;
// console.log(subtraction);

// const remainder = numA % numB;
// console.log(remainder);

//? Перевірте чи парні числа 15, 20, 45, 30.
// const numA = 15;
// console.log(numA % 2);

// const numB = 20;
// console.log(numB % 2);

// const numC = 45;
// console.log(numC % 2);

// const numD = 30;
// console.log(numD % 2);

/*
  ? Дано 90 хвилин, дізнайтеся скільки в цьому числі міститься годин і хвилин.
  ? Результат виведіть у консоль.
*/
// const totalMinutes = 90;
// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;

// console.log(hours);
// console.log(minutes);

/*
 * Number, Number.parseInt(), Number.parseFloat()
 */

/* 
  ? Попросіть користувача ввести число.
  ? Виведіть результат у консоль.
  ? Приведіть рядок до числа.
*/
// const userInput = Number(prompt('Введіть якесь число'));
// const sum = userInput + 50;

// console.log(sum);

//? Даний рядок '24px', дістаньте з цього рядка ціле число.
// const str = '24px';
// const num = Number.parseInt(str);

// console.log(num);

//? Даний рядок '25.5%', дістаньте з цього рядка дробове число.
// const str = '25.5%';
// const num = Number.parseFloat(str);

// console.log(num);

//? Спробуйте призвести до числа, строку 'abc'.
// const str = 'abc';
// const num = Number.parseInt(str);

// console.log(num);

//? Запросіть у користувача ввести два числа, складіть їх та виведіть результат у консоль.
// const numA = Number.parseFloat(prompt('Введіть перше число'));
// const numB = Number.parseFloat(prompt('Введіть друге число'));

// const result = numA + numB;

// console.log(result);

/*
 * Math.floor, Math.ceil, Math.round, Math.max, Math.min, Math.pow().
 */

/*
  ? Дано число 23.5, застосуйте до нього різноманітні методи заокруглення.
  ? Протестуйте на числах, 23.3, 23.9
*/
// const number = Math.round(23.3);

// console.log(number);

/*
  ? Попросіть користувача ввести число та ступінь.
  ? Зведіть число до ступеня і виведіть результат у консоль.
*/
// const num = Number(prompt('Введіть якесь число'));
// const pow = Number(prompt('Введіть ступінь для цього числа'));

// const result = num ** pow;

// console.log(result);
