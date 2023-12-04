'use strict'
class Person {
    /*
    private name: string;
    id: number;
    salary: number;
    constructor(name: string, id: number, salary: number) {
        this.name = name
        this.id = id
        this.salary = salary
    }
    */
    constructor(private name: string, public id: number, public salary: number) {

    }
    set Name(val: string) {
        this.name = val
    }
    get Name(): string {
        return this.name
    }
    print() {
        return this.id + ' ' + this.name + ' ' + this.salary
    }
}
class Trainer extends Person {
    //subject: string;
    constructor(name: string, id: number, salary: number, public subject: string) {
        super(name, id, salary)
        //this.subject = subject
    }
    print() {
        return super.print() + ' ' + this.subject
    }
}
const anilRef = new Trainer('anil', 1, 1000, 'React JS')
const sunilRef = new Trainer('sunil', 2, 2000, 'Angular')

//access properties of object
console.log(anilRef.Name)
console.log(sunilRef['salary'])

console.log(anilRef.print())