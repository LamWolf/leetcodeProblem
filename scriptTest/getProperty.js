class Person {
    constructor() {
        // this.name = 'name';
        // this.age = 18;
    }
}
class Student extends Person {
    constructor() {
        super();
    }
}
const person = new Student();
console.log(Object.keys(person));
console.log(Object.getOwnPropertyNames(person));
console.log(person);
// console.log(person.__proto__);
