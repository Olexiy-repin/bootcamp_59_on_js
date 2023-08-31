window.addEventListener('load', function () {
  baguetteBox.run('.js-gallery', {
    fullScreen: false,
    noScrollbars: true,

    afterShow() {
      console.log('Hello');
    },

    afterHide() {
      console.log('The End!');
    },
  });
});
