/*
 * Створення об'єкта (конструктор, литерал).
 * Властивості, ключі (ім'я) та значення
 */

// Фільм (назва, опис, рейтинг, акторскій склад, вікове обмеження)

// const film = {
//   title: 'Duna',
//   description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, ducimus.',
//   rating: 8,
//   actors: ['Charlotte Brewer', 'Larry Collier', 'Helen Johnson'],
//   adult: false,
// };

// console.log(film);

/*
 * Доступ до властивостей(obj.key, obj[key]).
 * Додавання та зміна властивостей
 */

// console.log(film.title);
// console.log(film.actors);

// film.rating = 9;
// film.actors.push('Alexander Maldonado');

// console.log(film);

// const key = 'description';

// console.log(film['title']);
// console.log(film['actors']);

// film['rating'] = 9;

// console.log(film);

// console.log(film[key]);
/*

 * Короткий запис властивостей
 */

/* <input type="text" name="username"> */
/* <input type="email" name="useremail"> */

// const username = 'Oleksii';
// const email = 'test@gmail.com';

// const signUpData = {
//   username,
//   email,
// };

// console.log(signUpData);

/*
 * Присвоєння за посиланням
 */

// const user = {
//   firstName: 'Brett',
//   lastName: 'Romero',
//   age: 20,
// };

// const userCopy = user;

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);

// userCopy.firstName = 'Robert';

// console.log('user: ', user);
// console.log('userCopy: ', userCopy);
