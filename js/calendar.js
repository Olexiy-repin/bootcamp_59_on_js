const tableBodyEl = document.querySelector('.js-calendar-body');
let prevTableDataEl = null;

const onTableDataElClick = event => {
  // const tableDataEl = event.target;
  const { target: tableDataEl } = event;

  if (tableDataEl.textContent === '') {
    return;
  }

  if (prevTableDataEl === tableDataEl) {
    tableDataEl.classList.toggle('active');

    return;
  }

  if (prevTableDataEl !== null) {
    prevTableDataEl.classList.remove('active');
  }

  tableDataEl.classList.add('active');
  prevTableDataEl = tableDataEl;
};

tableBodyEl.addEventListener('click', onTableDataElClick);
