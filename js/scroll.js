const randomColor = () => {
  return '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
};

const sectionElements = document.querySelectorAll('.section');
const animatedSectionEl = document.querySelector('.js-animated-section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

const onDocumentScroll = event => {
  console.log(window.scrollY);

  if (window.scrollY >= 600) {
    animatedSectionEl.classList.add('active');

    document.removeEventListener('scroll', throttledOnDocumentScroll);
  }
};

const throttledOnDocumentScroll = _.throttle(onDocumentScroll, 300);

document.addEventListener('scroll', throttledOnDocumentScroll);
