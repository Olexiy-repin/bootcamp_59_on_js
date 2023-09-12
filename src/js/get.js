/*
 * Method (GET).
 */

const BASE_URL = 'http://localhost:3000';
const fetchOptions = {
  method: 'GET',
};

fetch(`${BASE_URL}/users`, fetchOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  })
  .then(users => {
    console.log(users);
  })
  .catch(err => console.log(err));
');
