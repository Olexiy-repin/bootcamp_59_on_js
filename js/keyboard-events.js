/*
 * Події клавіатури. keypress, keydown, keyup
 */

document.addEventListener('keydown', event => {
  // console.log(event);

  // console.log(
  //   `event.code: ${event.code}, event.key: ${event.key}, event.keyCode: ${event.keyCode}`
  // );

  event.preventDefault();

  if ((event.metaKey || event.ctrlKey) && event.code === 'KeyF') {
    console.log(`Pressed ctrl + f!`);
  }
});
