const localStorageKey = "readBooks";

const categoriesDictionary = {
    romance: "Romans",
    fanstasy: "Fantastyczne",
    horror: "Horror",
    adventure: "Przygodowe",
    criminal: "Kryminał",
    thriller: "Thriller"
};

const ratingDictionary = [
    'Wybierz',
    'Na pewno do niej wrócę!',
    'Świetna',
    'Dobra',
    'Śrenia',
    'Kiepska'
];

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
    

    const authorTd = newBookTds[2];
    const authorInput = authorTd.getElementsByTagName("input")[0];
    newBookObj.author = authorInput.value;
    

    const categoryTd = newBookTds[3];
    const categorySelect = categoryTd.getElementsByTagName("select")[0];
    const selectedCategories = categorySelect.querySelectorAll("option:checked");
    const selectedCategoriesArray = Array.from(selectedCategories);
    const categories = selectedCategoriesArray.map(function(categoryObj){
        return categoryObj.value;
    })

    newBookObj.category = categories;

    const ratingTd = newBookTds[4];
    const ratingSelect = ratingTd.getElementsByTagName("select")[0];
    newBookObj.rating = ratingSelect.value;
    
    console.log(newBookObj);

    const currentBooks = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    currentBooks.push(newBookObj);
    localStorage.setItem(localStorageKey,JSON.stringify(currentBooks));


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

Object.keys(categoriesDictionary).sort().forEach(function(key){
    const option = document.createElement('option');
    option.setAttribute('value', key);
    option.textContent = categoriesDictionary[key];
    selectCategory.append(option);
});

tdCategory.append(selectCategory);
tr.append(tdCategory);

const tdRating = document.createElement('td');
const selectRating = document.createElement('select');

ratingDictionary.forEach(function(rating, index){
    const option = document.createElement('option');
    option.setAttribute('value',index);
    option.textContent = rating;
    selectRating.append(option);
});

tdRating.append(selectRating);
tr.append(tdRating);



tableHandler.prepend(tr);




}

const tBodyCollection = document.getElementsByTagName("tbody");
const tBody = tBodyCollection[0];


const readBookList = JSON.parse(localStorage.getItem(localStorageKey)) || [];

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
    tdCategory.textContent = bookObject.category.map(function(cat){
        return categoriesDictionary[cat];
    }).join(", ");

    tr.append(tdCategory);

    const tdRating = document.createElement("td");
    tdRating.textContent = ratingDictionary[bookObject.rating];

    tr.append(tdRating);
    tBody.append(tr);
});