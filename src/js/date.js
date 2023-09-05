//* Створення нової дати
// const date = new Date(2023, 8, 6, 12, 30, 24);

// console.dir(date);

// console.log(date.getDay());

//* Методи дати

//? TASK 01
// Створіть об'єкт Date для дати: 9 вересня 2022 року, 3 години 12 хвилин.

// const date = new Date(2022, 8, 9, 3, 12);
// const date = new Date('2022-09-09 03:12:00');

// console.log(date);

//? TASK 02
// Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».

// const getWeekDay = date => {
//   const days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

//   return days[date.getDay()];
// };

// const date = new Date(2023, 8, 7);

// console.log(getWeekDay(date));

//? TASK 03
// Створіть функуію getLastDayOfMonth(year, month), яка повертає останнє число місяця. Інколи це 30, 31 або навіть 28/29 у лютому.
// Параметри:
// year – рік з чотирьох цифр, наприклад, 2012.
// month – місяць від 0 до 11.
// Наприклад, getLastDayOfMonth(2012, 1) = 29 (високосний рік, лютий).

// const getLastDayOfMonth = (year, month) => {
//   const date = new Date(year, month + 1, 0);

//   return date.getDate();
// };

// console.log(getLastDayOfMonth(2012, 1));

//? TASK 04
// Створіть функцію getSecondsToTomorrow(), яка повертає кількість секунд до завтрашнього дня.

// const getSecondsToTomorrow = () => {
//   const now = new Date();
//   const tomorrow = new Date(
//     now.getFullYear(),
//     now.getMonth(),
//     now.getDate() + 1
//   );

//   const diff = tomorrow - now;

//   return diff / 1000;
// };

// console.log(getSecondsToTomorrow());
