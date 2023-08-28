const accordionBtnsEl = document.querySelectorAll('.js-accordion-btn');

const onAccordionBtnElClick = event => {
  const { target: currentAccordionBtn } = event;

  const currentAccordionPanel = currentAccordionBtn.nextElementSibling;

  // if (currentAccordionPanel.classList.contains('active')) {
  //   currentAccordionPanel.classList.remove('active');
  // } else {
  //   currentAccordionPanel.classList.add('active');
  // }

  currentAccordionPanel.classList.toggle('active');
};

accordionBtnsEl.forEach(accordionBtn => {
  accordionBtn.addEventListener('click', onAccordionBtnElClick);
});

console.log(accordionBtnsEl);
