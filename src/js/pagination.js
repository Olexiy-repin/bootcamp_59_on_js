// https://jsonplaceholder.typicode.com/
import { JsonPlaceholderAPI } from './jsonplaceholder-api';
import { createPostsCards } from './templates/posts-cards';

const postsListEl = document.querySelector('.js-posts');
const loadMoreBtnEl = document.querySelector('.js-load-more');

const jsonPlaceholderAPI = new JsonPlaceholderAPI();

jsonPlaceholderAPI
  .fetchPosts()
  .then(posts => {
    console.log(posts);

    postsListEl.innerHTML = createPostsCards(posts);

    loadMoreBtnEl.classList.remove('is-hidden');
  })
  .catch(err => {
    console.log(err);
  });

const onLoadMoreBtnElClick = event => {
  jsonPlaceholderAPI.page += 1;

  jsonPlaceholderAPI
    .fetchPosts()
    .then(posts => {
      if (posts.length === 0) {
        loadMoreBtnEl.classList.add('is-hidden');

        return;
      }

      postsListEl.insertAdjacentHTML('beforeend', createPostsCards(posts));
    })
    .catch(err => {
      console.log(err);
    });
};

loadMoreBtnEl.addEventListener('click', onLoadMoreBtnElClick);
