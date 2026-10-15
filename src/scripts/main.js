'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const newTdCell = document.createElement('td');
  const newThCell = document.createElement('th');

  if (row.cells[1].tagName === 'TH') {
    newThCell.textContent = row.cells[1].textContent;
    row.cells[3].after(newThCell);
  }

  if (row.cells[1].tagName === 'TD') {
    newTdCell.textContent = row.cells[1].textContent;
    row.cells[3].after(newTdCell);
  }
});
