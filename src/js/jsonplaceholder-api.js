export class JsonPlaceholderAPI {
  static BASE_URL = 'https://jsonplaceholder.typicode.com';

  constructor() {
    this.page = 1;
  }

  fetchPosts() {
    return fetch(
      `${JsonPlaceholderAPI.BASE_URL}/posts?_page=${this.page}&_limit=10`
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }
}
