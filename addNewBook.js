
function showButton() {
    document.getElementById("save").style.display = "block";
};

const addNewBookButton = document.getElementById("addNewBook");
addNewBookButton.addEventListener("click", showButton, true);

function addNewBookHandler() {

//document.createElement

const tableCollection1 = document.getElementsByTagName('table');
const tableHandler = tableCollection1[0];

const tr = document.createElement('tr');

const tdDate = document.createElement('td');
const myDate = new Date();
const myDateString = myDate.toISOString();

const myDateSlicedString = myDateString.slice(0, 10);

tdDate.textContent = myDateSlicedString;

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

const optionFantasy = document.createElement('option');
optionFantasy.setAttribute('value', 'fantasy');
optionFantasy.textContent = 'Fantastyczne';

const optionHorror = document.createElement('option');
optionHorror.setAttribute('value', 'horror');
optionHorror.textContent = 'Horror';

const optionAdventure = document.createElement('option');
optionAdventure.setAttribute('value', 'adventure');
optionAdventure.textContent = 'Przygodowe';

const optionCriminal = document.createElement('option');
optionCriminal.setAttribute('value', 'criminal');
optionCriminal.textContent = 'Kryminał';

const optionThiller = document.createElement('option');
optionThiller.setAttribute('value', 'thiller');
optionThiller.textContent = 'Thiller';

selectCategory.append(optionFantasy);
selectCategory.append(optionThiller);
selectCategory.append(optionCriminal);
selectCategory.append(optionAdventure);
selectCategory.append(optionHorror);
selectCategory.append(optionRomance);
tdCategory.append(selectCategory);
tr.append(tdCategory);



tableHandler.prepend(tr);



}


const array = [{date: '11.05.2019', title: 'Kroniki Jakuba Wędrowycza', author: 'Andrzej Pilipiuk', category: 'komedia'}, 
               {date: '11.05.2019', title: 'Mitologia', author: 'Jan Parandowski', category: 'Fantastyczne'},
               {date: '11.05.2019', title: 'Siewca Wiatru', author: 'Maja Lidia Kossakowska', category: 'Fntastyczne'}];