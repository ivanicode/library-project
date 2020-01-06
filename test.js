/*const hex2Dec = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
}

function getDecFromHex(hex) {
    return !isNaN(parseInt(hex)) ? parseInt(hex) : hex2Dec[hex];
}

function calculate(val1, val2){
    return (val1 * 16) + val2;
}

function getRGB (hex){
    if (typeof hex === "string" && hex.length === 7) {
        //"#000000" "rgb(0,0,0)"

        const hexArray = hex.split("");
        const decArray = hexArray.map(function(el, index){
            if (index) {
                return getDecFromHex(el.toLowerCase())
            }
        })

        const r = calculate(decArray[1], decArray[2]);
        const g = calculate(decArray[3], decArray[4]);
        const b = calculate(decArray[5], decArray[6]);

        //return "rgb("+ r + ", " + g + ", " + b + ")";
        return `rgb(${r}, ${g}, ${b})`;
    }
}

console.log(getRGB("#00FF00"));
*/

/*function calculate(a){ //a = 19
    if(a===0){
        return "0";
    }
    if(a===1){
        return "1";
    }
    const result = Math.sqrt(a); // result = 4.xxx
    const b = parseInt(result); // b = 4
    const rest = a - Math.pow(2, b); // rest = 3

    const result2 = Math.sqrt(rest); // result2 = 1,xxx
    const b2 = parseInt(result2); // b2 = 1
    const rest2 = rest - Math.pow(2, b2); // rest2 = 1

    if (rest2 === 1) {
        // 2 do potęgo zero jest włączone
    }

}
*/



function compareObj(obj1, obj2){
    let isTheSame = true;
    Object.keys(obj1).forEach(function(element, index){
        if(obj1[element] === obj2[element]){
            isTheSame = isTheSame && true;
        } else {
            isTheSame = isTheSame && false;
        }
    });
    return isTheSame;
}

const myArr = [];
myArr[0] = 11;
myArr[1] = 32;
myArr[2] = 3;
myArr[3] = 7;
myArr[4] = 100;
myArr[5] = 17;

const myResultArr = [];
myResultArr[0] = myArr[3];
myResultArr[1] = myArr[4];
myResultArr[2] = myArr[5];
myResultArr[3] = myArr[0];
myResultArr[4] = myArr[1];
myResultArr[5] = myArr[2];

if (compareObj(solution(myArr), [7, 100, 17, 11, 32, 3])) {
    console.info("Funkcja solution działa poprawnie")
} else {
    console.error("Funkcja solution nie działa")
}

function solution(arr){
    for(var i = 0; i < arr.length; i++){
        const lastIndex = arr.length -1;
        let newIndex = i + 3;
        if(newIndex > lastIndex) {
            newIndex = i - 3;
        }
        return arr[newIndex];
    }
    return newArr;
}







/*
function solution(arr){
    const lastIndex = arr.length -1;
    const newArr = arr.map(function(number, index, arr){
        let newIndex = index + 3;
        if(newIndex > lastIndex){
            newIndex = index - 3; 
        }
        return arr[newIndex];
    })
    return newArr;
}

*/






//funkcja dostaje i zwraca tablice
//zwraca tablice, o przesuniętym indexie o 3 elementy w prawo
//






/*
if (compareObj({a: 1, b: 2},{a: 1, b: 2}) === true) {
    console.info("Funkcja compareObj działa poprawnie")
} else {
    console.error("Funkcja compareObj nie")
}



function compareObj(obj1, obj2){
    let isTheSame = true;
    Object.keys(obj1).forEach(function(element, index){
        if(obj1[element] === obj2[element]){
            isTheSame = isTheSame && true;
        } else {
            isTheSame = isTheSame && false;
        }
    });
    return isTheSame;
}


if (compareObj(solution([4, 1, 1]), {4: 1, 1: 2})) {
    console.info("Funkcja solution działa poprawnie")
} else {
    console.error("Funkcja solution nie")
}

function solution(num){
    let ind = 0;
    const result = {};
    num.forEach(function(cyfra){
        if(!result[cyfra]){
            result[cyfra] = 0;
        }
        result[cyfra]++;
    });
    console.log(result);
    return result;
}

*/






/*
if (num(12345) === 15243) {
    console.info("Funkcja num działa poprawnie")
} else {
    console.error("Funkcja num nie")
}




function num(cyfry) {
    const number = cyfry.toString();
    let i = 0;
    let result = "";
    while (i < number.length){
        let ind = 0;
        if(i % 2 === 0){
            ind = i / 2; 
        } else {
            ind = number.length - Math.ceil(i / 2);
        }
        result = result + number[ind];
        i++;
        console.log(result);
    }
    return parseInt(result, 10);
}
*/

/*
1. Do funkcji wchodzą cyfry.
Cyfry te zmienić w string
2. Pętla ma rozpocząć się od indexu 1, ponieważ pod indexem 0 ma pozostać ta sama cyfra
3. Pętla ma ostatnią cyfrę umieścić w indexie 2 


*/







/*
const txt = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed enim massa, consectetur eu ante eu, accumsan luctus felis. Nam ut venenatis risus. Fusce quis sem tellus. Praesent velit erat, eleifend id tellus in, pretium scelerisque nulla. Ut semper eleifend eros ac bibendum. Phasellus euismod massa at risus porta consectetur. Phasellus vulputate lorem tincidunt lacus bibendum interdum. Nunc hendrerit tristique quam eu condimentum. Praesent non lorem pellentesque nibh condimentum gravida. Aenean mattis nulla lacinia, eleifend nisi ut, pulvinar ante.";


if(parseText(txt.toLowerCase()) === txt){
    console.info("Funkcja parseText działa poprawnie")
} else {
    console.error("Funkcja parseText nie")
}


function parseText(text) {
    const stringArr = text.split(".");
    console.log(stringArr);
    const up = stringArr.map(
        function(sentence, i){
            const trimmedSent = sentence.trim()
            const firstLetter = trimmedSent[0];
            const newSent = trimmedSent.replace(firstLetter, (firstLetter || "").toUpperCase());
            console.log(newSent);
            return newSent;
        }
    );
    console.log(up.join(". "));
    return up.join(". ").trim();
}






*/



















/*
let und;

if(sum(und, "10", -5, 2.5, "null") === 7.5){
    console.info("Funkcja sum działa poprawnie");
} else {
    console.error("Funkcja sum nie działa poprawnie");
}

function sum(){
    let result = 0;
    for(i in arguments){
        const parsedValue = parseFloat(arguments[i]);
        const value = isNaN(parsedValue) ? 0 : parsedValue;
        result = result + value;
    }
    return result;
}


if (minus(7, 3, -2) === 6){
    console.info("Funkcja minus działa poprawnie");
} else {
    console.error("Funkcja minus nie działa poprawnie")
}


function minus(){
    let result = arguments[0];
        for(i in arguments){
            if(i > 0){
                console.log(result);
                const parsedValue = parseFloat(arguments[i]);
                const value = isNaN(parsedValue) ? 0 : parsedValue;
                result = result - value;
            }
        }
    return result;
}
console.log(minus(10, 4));
*/


/*
function sum (){
    let sum = 0;
    let i = 0;
    while (i < arguments.length){
        sum += arguments[i];
        i++;   
    }
    return sum;
}


if(sum(2, 10, -5) === 7){
    console.info("Funkcja sum działa poprawnie");
} else {
    console.error("Funkcja sum nie działa poprawnie");
}



function minus(){
    let result = arguments[0];
    let i = 1;
    while (i < arguments.length){
        result = result - arguments[i];
        i++;
    }
    return result;
}

if (minus(7, 3, -2) === 6){
    console.info("Funkcja minus działa poprawnie");
} else {
    console.error("Funkcja minus nie działa poprawnie")
}






if (multi(2, 4, 4) === 32){
    console.info("Funkcja multi działa poprawnie");
} else {
    console.error("Funkcja multi nie działa poprawnie");
}



function multi1(){
    let result = arguments[0]
    let i = 1;
    while (i < arguments.length){
        result = result * arguments[i];
        i++;
    }
    return result;
}


if (divide(40, 2, 5) === 4){
    console.info("Funkcja divide działa poprawnie");
} else {
    console.error("Funkcja didvide nie działa poprawnie");
}



function divide1() {
    let result = arguments[0];
    let i = 1;
    while(i < arguments.length){
        result = result / arguments[i];
        i++;
    }
    return result;
}

const a = ["a", 4, true];

for(key in a){console.log(key, a[key])}


function multi(){
    let result = 1;
    for(i in arguments){
        result = result * arguments[i];
    }
    return result;
}

function divide(){
    let result = arguments[0];
    for(i in arguments){
        if(i > 0){
            result = result / arguments[i];
        }nj
    }
    return result;
}
*/


/*
function minus (){
    const a = arguments.length;
    let result = arguments[0];
    for (let i = 1; i < a; i++){
        result = result - arguments[i];
    }
    return result;
}

*/


/*
function sum() {
    const length = arguments.length;
    let sum = 0;
    for(let i = 0; i < length; i++) {
     sum += arguments[i];
    }
    return sum;
   }
*/






/*
function divide(){
    let co = arguments[0];
    for(let i = 1; i < arguments.length; i++){
        co = co / arguments[i];
    }
    return co;
}







function multi() {
    let b = 1;
    for(let i = 0; i < arguments.length; i++){
        b = arguments[i] * b;
    }
    return b;
}













console.log(minus(10, 4, 5));


*/




//do-while

/*
function calculate(a){
    let stringi = "";
    let rest = a;
    for (let i = 6; i >= 0; i--) {
        console.log(i);
        const pow = Math.pow(2, i);
        const ext = rest - pow;
        if (ext >= 0) {
            rest = ext;
            stringi += 1;
        } else {
            stringi += 0;
        }
    }
    return stringi;
}

console.log(calculate(64));

*/






/*function User(age){
    const checkIfAdult = function(){
        return age >= 18;
    }
    this.olderMe = age + 10;
    this.checkMe = function(){
        return checkIfAdult();
    };
    this.age = age;
}

const myUser = new User(16);
console.log(myUser);
console.log(myUser.checkMe())








const employees = [{
    name: "Kowalski", 
    birthYear: 1985,
    salary: 3000,
    familyStatus: "single"
}, {
    name: "Buc",
    birthYear: 1978,
    salary: 4000,
    familyStatus: "divorced"
}, {
    name: "Kwiatkowska",
    birthYear: 1980,
    salary: 2500,
    familyStatus: "married"
}]

//console.log(sortNumbersByOrder("asc", "salary"));
//console.log(sortTextByOrder("asc"));

//const foo = x("asc", "salary", "number");
//console.log(employees.sort(foo));

function x(sort, key, type){
    return function(item1, item2){
        if (type === "number"){
            if (sort === "asc") {
                return item1[key] - item2[key];
            } else {
                return item2[key] - item1[key];
            }
        } else {
            if (sort === "asc") {
                if (item1[key] < item2[key]) {
                    return -1;
                  }
                  if (item1[key] > item2[key]) {
                    return 1;
                  }
                
                  // names must be equal
                  return 0;
            } else {
                if (item1[key] > item2[key]) {
                    return -1;
                  }
                  if (item1[key] < item2[key]) {
                    return 1;
                  }
                
                  // names must be equal
                  return 0;
            }
        }
    }
}



function sortTextAsc(item1, item2){
    if (item1.name < item2.name) {
        return -1;
      }
      if (item1.name > item2.name) {
        return 1;
      }
    
      // names must be equal
      return 0;
}
function sortTextDesc(item1, item2){
    if (item1.name > item2.name) {
        return -1;
      }
      if (item1.name < item2.name) {
        return 1;
      }
    
      // names must be equal
      return 0;
}


function sortNumbersByOrder(order, key){
    let res;
    if (order === "asc"){
       res = Array.from(employees).sort(sortNumberAsc)
    } else {
       res = Array.from(employees).sort(sortNumberDesc)
    }
    function sortNumberAsc(item1, item2){
        return item1[key] - item2[key];
    }
    function sortNumberDesc(item1, item2){
        return item2[key] - item1[key];
    }
    return res;
}

function sortTextByOrder(order){
    if (order === "asc"){
       return employees.sort(sortTextAsc)
    } else {
       return employees.sort(sortTextDesc)
    };
}

function useKey(key){

}

*/



