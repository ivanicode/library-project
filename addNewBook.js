function addNewBookHandler() {

//document.createElement

const tableCollection1 = document.getElementsByTagName('table');
const tableHandler = tableCollection1[0];

const tr = document.createElement('tr');
const td = document.createElement('td');
const inputAuthor = document.createElement('input');
inputAuthor.setAttribute('placeholder','author');
const inputTitle = document.createElement('input');
inputTitle.setAttribute('placeholder','title');
const tdDate = document.createElement('td');
tdDate.textContent = '26.08.2019';

//td.append(inputAuthor);
//td.append(inputTitle);
tr.append(tdDate);
tr.append(td);
tableHandler.prepend(tr);



}

