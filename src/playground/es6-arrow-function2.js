// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001))

//this keyword - no longer bound

const user = {
    name: "Omar",
    cities: ['Arnhem', 'Santa Cruz', 'drol'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + 'has live in' + city)
    }
};
console.log(user.printPlacesLived());

// CHallenge area

const multiplier = {
    // numbers -array of numbers
    numbers: [1,2,3],
    // multiplyBy - single number
    multiplyBy: 2,
    // multiply - return a new array where the numbers have been multiplies by multiplyBy number
    multiply() { 
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());