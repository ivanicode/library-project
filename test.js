const hex2Dec = {
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



