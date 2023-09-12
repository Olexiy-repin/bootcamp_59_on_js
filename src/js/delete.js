/*
 * Method(DELETE)
 */

const BASE_URL = 'http://localhost:3000';

const deleteUserById = userId => {
  const fetchOptions = {
    method: 'DELETE',
  };

  return fetch(`${BASE_URL}/users/${userId}`, fetchOptions).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};

deleteUserById(13)
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
