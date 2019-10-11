function showButton() {
    document.getElementById("save").style.display = "block";
};

function saveBook() {
    const newBookObj = {};
    const newBookElement = document.getElementById("newBook");
    const newBookTds = newBookElement.getElementsByTagName("td");
    newBookObj.date = newBookTds[0].textContent;

    const titleTd = newBookTds[1];
    const titleInput = titleTd.getElementsByTagName("input")[0];
    newBookObj.title = titleInput.value;
    console.log(newBookObj);

    const authorTd = newBookTds[2];
    const authorInput = authorTd.getElementsByTagName("input")[0];
    newBookObj.author = authorInput.value;
    console.log(newBookObj);

    const categoryTd = newBookTds[3];
    const categorySelect = categoryTd.getElementsByTagName("select")[0];
    const selectedCategories = categorySelect.querySelectorAll("option:checked");
    const selectedCategoriesArray = Array.from(selectedCategories);
    const categories = selectedCategoriesArray.map(function(categoryObj){
        return categoryObj.innerHTML;
    })
    console.log(categories);

    const ratingTd = newBookTds[4];
    const ratingSelect = ratingTd.getElementsByTagName("select")[0];
    

}




const addNewBookButton = document.getElementById("addNewBook");
addNewBookButton.addEventListener("click", showButton, true)


function addNewBookHandlerRating() {

//document.createElement

const tableCollection1 = document.getElementsByTagName('table');
const tableHandler = tableCollection1[0];

const tr = document.createElement('tr');
tr.setAttribute("id", "newBook");

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

const tBodyCollection = document.getElementsByTagName("tbody");
const tBody = tBodyCollection[0];

const localStorageKey = "readBooks";
const readBookList = localStorage.getItem(localStorageKey) || [];

/*
[{date: '11.05.2019', title: 'Kroniki Jakuba Wędrowycza', author: 'Andrzej Pilipiuk', category: 'komedia', rating: 'Świetna!'}, 
               {date: '11.05.2019', title: 'Mitologia', author: 'Jan Parandowski', category: 'Fantastyczne', rating: 'Bardzo dobra'},
               {date: '11.05.2019', title: 'Siewca Wiatru', author: 'Maja Lidia Kossakowska', category: 'Fntastyczne', rating: 'Bardzo dobra'}];
*/
readBookList.forEach(function(bookObject) {
    const tr = document.createElement("tr");
    const tdDate = document.createElement("td");
    tdDate.textContent = bookObject.date;

    tr.append(tdDate);

    const tdTitle = document.createElement("td");
    tdTitle.textContent = bookObject.title;

    tr.append(tdTitle);

    const tdAuthor = document.createElement("td");
    tdAuthor.textContent = bookObject.author;

    tr.append(tdAuthor);

    const tdCategory = document.createElement("td");
    tdCategory.textContent = bookObject.category;

    tr.append(tdCategory);

    const tdRating = document.createElement("td");
    tdRating.textContent = bookObject.rating;

    tr.append(tdRating);
    tBody.append(tr);
});