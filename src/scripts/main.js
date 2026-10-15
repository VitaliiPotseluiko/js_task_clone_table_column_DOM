'use strict';

const rows = document.querySelectorAll('tr');

rows.forEach((row) => {
  const newTdCell = document.createElement('td');
  const newThCell = document.createElement('th');

  if (row.cells[1].tagName === 'TH') {
    newThCell.textContent = row.cells[1].textContent;
    row.cells[row.cells.length - 2].after(newThCell);
  } else {
    newTdCell.textContent = row.cells[1].textContent;
    row.cells[row.cells.length - 2].after(newTdCell);
  }
});
