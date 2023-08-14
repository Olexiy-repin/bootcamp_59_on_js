/*
 * Функціональний вираз та оголошення функції.
 * Параметри, аргументи, повернення.
 */

// function назва_функції(параметр_1, параметр_2...) {
// тіло функції
// }

// function greet(firstName) {
//   // let firstName = undefined;

//   console.log(`Hello ${firstName}!`);
// }

// greet('Oleksii');

// greet('Alexander');

// greet('Eunice');

// function sum(a, b) {
//   const result = a + b;

//   return result;
// }

// const total = sum(10, 20);

// console.log(total);

// function greet(firstName) {
//   console.log(`Hello ${firstName}!`);
// }

// greet('Oleksii');
// greet('Oleksii');
// greet('Oleksii');

/*
? Напиши функцію calcBMI(weight, height) яка розраховує і повертає індекс маси тіла людини.
? Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
? Вага і висота будуть спеціально передані як рядки. Нецілі числа можуть бути задані у вигляді 24.7 або 24,7,
? тобто як роздільник дробової частини може бути кома.
? Індекс маси тіла необхідно округлити до однієї цифри після коми;
*/

// const calcBMI = function (weight, height) {
//   weight = Number(weight.replace(',', '.'));
//   height = Number(height.replace(',', '.'));

//   const resultBmi = weight / height ** 2;

//   return Number(resultBmi.toFixed(1));
// };

// const bmi = calcBMI('88,3', '1.75');

// console.log(bmi); // 28.8

/*
? Напишіть функцію min(a, b), яка повертає менше з чисел a і b.
*/

// const min = function (a, b) {
//   return a < b ? a : b;
// };

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); // 1

/*
? Напишіть функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
? значення яких буде передано до параметра dimensions у вигляді рядка.
? Значення гарантовано розділені пробілом.
*/

// const getRectArea = function (dimensions) {
//   const rectSidesArr = dimensions.split(' ');

//   return Number(rectSidesArr[0]) * Number(rectSidesArr[1]);
// };

// console.log(getRectArea('8 11')); // 88
// console.log(getRectArea('18 11')); // 198
// console.log(getRectArea('8 21')); // 168

/*
? Напиши функцію logItems(items), яка отримує масив і використовує цикл for,
? який для кожного елемента масиву буде виводити до консоля повідомлення
? у форматі < номер елемента > - < значення елемента >. Нумерація елементів повинна починатися з 1.
? Наприклад, для першого елемента масиву ['Mango','Poly','Ajax'] з індексом 0 буде виведено 1 - Mango,
? а для індексу 2 виведе 3 - Ajax.
*/

// const logItems = function (items) {
//   for (let i = 0; i < items.length; i += 1) {
//     console.log(`${i + 1} - ${items[i]}`);
//   }
// };

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/*
? Напишіть функцію printContactsInfo(names, phones), яка виводить у консоль ім'я і телефонний номер користувача.
? Параметри names і phones будуть передані рядками, розділені комами.
? Порядковий номер імен і телефонів у рядках вказують на відповідність.
? Кількість імен і телефонів гарантовано однакова.
*/

// const printContactsInfo = function (names, phones) {
//   names = names.split(',');
//   phones = phones.split(',');

//   for (let i = 0; i < names.length; i += 1) {
//     console.log(`${names[i]}: ${phones[i]}`);
//   }
// };

// printContactsInfo(
//   'Jacob,William,Solomon,Artemis',
//   '89001234567,89001112233,890055566377,890055566300'
// );

// printContactsInfo('Vera,Carr,Violet,Sherman', '89001234567,89001112233,890055566377,890055566300');

/*
? Напишіть функцію findLargestNumber(numbers) яка шукає найбільше число в масиві.
*/

// const findLargestNumber = function (numbers) {
//   let maxNumber = numbers[0];

//   for (let i = 1; i < numbers.length; i += 1) {
//     if (numbers[i] > maxNumber) {
//       maxNumber = numbers[i];
//     }
//   }

//   return maxNumber;
// };

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

/*
? Напишіть функцію calcAverage() яка приймає довільну кількість аргументів і повертає їх середнє значення.
? Всі аругменти будуть тільки числами.
*/

// const calcAverage = function () {
//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total / arguments.length;
// };

// console.log(calcAverage(1, 2, 3, 4)); // 2.5
// console.log(calcAverage(14, 8, 2)); // 8
// console.log(calcAverage(27, 43, 2, 8, 36)); // 23.2

/*
? Напишіть функції для роботи з колекцією навчальних курсів courses:
? addCourse(name) - додає курс в кінець колекції
? removeCourse(name) - видаляє курс з колекції
? updateCourse(oldName, newName) - змінює назву курса
*/

// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// const addCourse = function (newCourseName) {
//   if (courses.includes(newCourseName)) {
//     console.log(`У вас вже є курс ${newCourseName}`);

//     return;
//   }

//   courses.push(newCourseName);
// };

// const removeCourse = function (courseName) {
//   const idxOfCourse = courses.indexOf(courseName);

//   if (idxOfCourse === -1) {
//     console.log(`Курс ${courseName} не знайдено`);

//     return;
//   }

//   courses.splice(idxOfCourse, 1);
// };

// const updateCourse = function (oldCourseName, newCourseName) {
//   const idxOfCourse = courses.indexOf(oldCourseName);

//   if (idxOfCourse === -1) {
//     console.log(`Курс ${oldCourseName} не знайдено`);

//     return;
//   }

//   courses.splice(idxOfCourse, 1, newCourseName);
// };

// addCourse('Express');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
// addCourse('CSS'); // 'У вас вже є такий курс'

// removeCourse('React');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
// removeCourse('React'); // 'Курс за такою назвою не знайдено'

// updateCourse('Express', 'NestJS');
// console.log(courses); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
// updateCourse('С++', 'PHP'); // 'Курса за такою назвою не знайдено'
