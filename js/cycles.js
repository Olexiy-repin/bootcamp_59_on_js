/*
 * Цикли (while, do while, for)
 */

/*
 * While
 */

// while (condition) {
// код, тіло цикла (statement)
// }

// let iterator = 0;

// while (iterator < 10) {
//   console.log('Hello!');

//   // iterator = iterator + 1;
//   iterator += 1;
// }

/*
? Виведіть числа від 1 до 50
*/

// let iterator = 1;

// while (iterator <= 50) {
//   console.log(iterator);

//   iterator += 1;
// }

/*
? Знайдіть суму чисел від 1 до 100
 */
// let iterator = 1;
// let total = 0;

// while (iterator <= 100) {
//   // total = total + iterator;
//   total += iterator;

//   // iterator = iterator + 1;
//   iterator += 1;
// }

// console.log(total);

/*
 * Do While
 */
// do {
// statement
// } while (condition);

// let iterator = 0;

// do {
//   console.log(iterator);

//   iterator += 1;
// } while (iterator <= 50);

/*
? Напишіть цикл, який пропонує в prompt ввести число більше 100.
? Якщо відвідувач ввів інше число – попросити ввести ще раз.
? Цикл повинен запитувати число, поки відвідувач не введе число, більше 100.
? Передбачається, що відвідувач вводить лише числа;
*/

// let userInput;

// do {
//   userInput = Number(prompt('Введіть число більше 100!'));
// } while (userInput <= 100);

// console.log(userInput);

/*
 * For
 */
// for (initialization; condition; post - expression) {
//   statements
// }

// for (let iterator = 1; iterator <= 50; iterator += 1) {
//   console.log(iterator);
// }

/*
? За допомогою циклу for виведіть парні числа від 2 до 10.
*/

// for (let i = 2; i <= 10; i += 1) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

/*
? Напишіть програму, яка виводить через console.log усі числа від 1 до 100, з трьома винятками.
? Для чисел, що націло діляться на 3, вона повинна виводити 'Fizz',
? а для чисел, що діляться на 5 – 'Buzz'.
? Для чисел які кратні 3 та 5 = 'FizzBuzz'
*/

// 1 Варіант
// for (let i = 1; i <= 100; i += 1) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// 2 Варіант
// for (let i = 1; i <= 100; i += 1) {
//   let str = '';

//   if (i % 3 === 0) {
//     // str = str + 'Fizz';
//     str += 'Fizz';
//   }

//   if (i % 5 === 0) {
//     // str = str + 'Buzz';
//     str += 'Buzz';
//   }

//   console.log(str || i);
// }

/*
 ? Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чином:
 ? *
 ? **
 ? ***
 ? ****
 ? *****
 ? ******
 ? *******
 */

// let initialValue = '*';

// for (let star = '*'; star.length <= 7; star += initialValue) {
//   console.log(star);
// }
