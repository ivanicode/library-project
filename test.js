
function User(age){
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





