const objRef = {
    id: 1,
    name: 'anil',
    salary: 1000,
    projects: [
        {
            id: 1,
            startDate: new Date(2022, 11, 1),
            endDate: new Date(2024, 7, 12),
            members: [
                {
                    id: 100,
                    name: 'sunil'
                },
                {
                    id: 202,
                    name: 'joy'
                }
            ]
        },
        {
            id: 2,
            startDate: new Date(2022, 11, 1),
            endDate: new Date(2024, 7, 12),
            members: [
                {
                    id: 314,
                    name: 'john'
                },
                {
                    id: 411,
                    name: 'sam'
                }
            ]
        }
    ]
}

//objRef.projects[1].members[1].name
const { projects: [, { members: [{ name: memberName }] }] } = objRef
// const id = objRef.id
// const name = objRef.name

const { id, name } = objRef

console.log(id, name)

const intArray = [1, 2, 3]
// const x = intArray[1]
// const y = intArray[2]

const [, x, y] = intArray
/**
 * {
 *  0: 1,
 *  1: 2,
 *  2: 3
 * }
 */


// import { add as addFn } from "./utiliy";
// const { add:addFn } = require('./utiliy')
// addFn(12, 13)