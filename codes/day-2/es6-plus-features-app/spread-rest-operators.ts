const obj = {
    id: 1,
    name: 'anil',
    salary: 1000,
    friends: ['sunil', 'joy']
}

/*
const copy = {}

for (const propName in obj) {
    const propValue = obj[propName]
    copy[propName] = propValue
}
*/
//spread operator (...)
const copy = {
    ...obj
}
console.log(obj)
console.log(copy)

const numbers = [1, 2, 3, 4]
const copyNumbers: number[] = [...numbers]
// const copyNumbers: number[] = []
// for (const value of numbers) {
//     copyNumbers.push(value)
// }

//rest operator (...)
//helping you to declare an argument of type array of any, which can accept directly parameters
//there should be ONLY ONE array declared with rest operator
//the rest operator array should be the last one in the argument list
//rest operator is used with an argument (array) as part of function argument list, no regular array can be declared with rest operator
function calculateAverage(name: string, ...marks: number[]) {

}
calculateAverage('anil', 10, 20)
calculateAverage('sunil', 10, 20, 30)
calculateAverage('joy', 10, 20, 30, 40)



