// https://jsonplaceholder.typicode.com/

//? Піраміда
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => {
//     console.log(response);

//     response
//       .json()
//       .then(data => {
//         console.log(data);
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   })
//   .catch(err => {
//     console.log(err);
//   });

//? Без піраміди

//? Поертаємо відхилений проміс
// fetch('https://jsonplaceholder.typicode.com/poss')
//   .then(response => {
//     if (!response.ok) {
//       return Promise.reject(response.status);
//     }

//     console.log(response);

//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     switch (err) {
//       case 404: {
//         alert('Такого ресурсу не знайдено!');

//         break;
//       }
//     }
//   });

//? Прокидаємо помилку через throw
fetch('https://jsonplaceholder.typicode.com/posts?_limit=20&_sort=title')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    console.log(response);

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    switch (err.message) {
      case '404': {
        alert('Такого ресурсу не знайдено!');

        break;
      }
    }
  });
