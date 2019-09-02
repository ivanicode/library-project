function addNewBookHandler() {

//document.createElement

const tableCollection1 = document.getElementsByTagName('table');
const tableHandler = tableCollection1[0];

const tr = document.createElement('tr');

const tdDate = document.createElement('td');
tdDate.textContent = '27.08.2019';

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

const tdRating = document.createElement('td');
const selectRating = document.createElement('select');
selectRating.setAttribute('multiple','true');

const option1 = document.createElement('option');
option1.setAttribute('value','1');
option1.textContent = 'Na pewno do niej wrócę!';

const option2 = document.createElement('option');
option2.setAttribute('value','2');
option2.textContent = 'Świetna';

const option3 = document.createElement('option');
option3.setAttribute('value','3');
option3.textContent = 'Dobra';

const option4 = document.createElement('option');
option4.setAttribute('value','4');
option4.textContent = 'Średnia';

const option5 = document.createElement('option');
option5.setAttribute('value','5');
option5.textContent = 'Kiepska';

selectRating.append(option1);
selectRating.append(option2);
selectRating.append(option3);
selectRating.append(option4);
selectRating.append(option5);
tdRating.append(selectRating);
tr.append(tdRating);



tableHandler.prepend(tr);




}
