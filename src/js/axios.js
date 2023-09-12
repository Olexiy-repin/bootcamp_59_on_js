import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

axios
  .get(`${BASE_URL}/posts`)
  .then(response => {
    console.log(response);
    console.log(response.data);
  })
  .catch(err => {
    console.log(err);
  });

fetch(`${BASE_URL}/posts`)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
