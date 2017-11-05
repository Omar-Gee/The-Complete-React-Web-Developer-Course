
// Setup constructor to take name and age -> default =0
// getDescription - return name and age

class Person  {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        // return 'Hi ' + this.name + '!';
        return `Hi, I am ${this.name}!`;
    }
    getDescription(){
        return `${ this.name } is ${ this.age } old.`
    }
}

const me = new Person('Omar Geerman', 30);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());