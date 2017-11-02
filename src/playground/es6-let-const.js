var nameVar = "Omar";
var nameVar = "Mike";
console.log('nameVar', nameVar);

let nameLet = "Jen";
nameLet = "JUliie";
console.log('nameLet', nameLet);

const nameConst = "drol";
console.log('nameConst', nameConst);

// block scoping

const fullName = "Omar Geerman";
let firstName;

if (fullName) {
    firstName= fullName.split(" ")[0];
    console.log(firstName);
}

console.log(firstName);