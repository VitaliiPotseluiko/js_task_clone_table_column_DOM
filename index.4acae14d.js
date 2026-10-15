document.querySelectorAll("tr").forEach(function(e){var t=document.createElement("td"),l=document.createElement("th");"TH"===e.cells[1].tagName?(l.textContent=e.cells[1].textContent,e.cells[e.cells.length-1].before(l)):(t.textContent=e.cells[1].textContent,e.cells[e.cells.length-1].before(t))});
//# sourceMappingURL=index.4acae14d.js.map
