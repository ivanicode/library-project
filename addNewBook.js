function addNewBookHandler() {

//document.createElement

const tableCollection1 = document.getElementsByTagName('table');
const tableHandler = tableCollection1[0];

const tr = document.createElement('tr');

const tdDate = document.createElement('td');
tdDate.textContent = '26.08.2019';

tr.append(tdDate);

const tdTitle = document.createElement('td');
const inputTitle = document.createElement('input');
inputTitle.setAttribute('placeholder','title');

tdTitle.append(inputTitle);
tr.append(tdTitle);

const tdAuthor = document.createElement('td');
const inputAuthor = document.createElement('input');
inputAuthor.setAttribute('placeholder','author');

tdAuthor.append(inputAuthor);
tr.append(tdAuthor);

const tdCategory = document.createElement('td');
const selectCategory = document.createElement('select');
selectCategory.setAttribute('multiple', 'true');

const optionRomance = document.createElement('option');
optionRomance.setAttribute('value', 'romance');
optionRomance.textContent = 'Romans';

selectCategory.append(optionRomance);
tdCategory.append(selectCategory);
tr.append(tdCategory);



tableHandler.prepend(tr);




}

