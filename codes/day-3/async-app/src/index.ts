// const divide = (a: number, b: number) => {
//     const p = new Promise<number>(
//         //executor function
//         (resolveFn, rejectFn) => {
//             const res = a / b
//             if (res === Infinity) {
//                 const err = new Error('divisior should not be zero')
//                 rejectFn(err)
//             }

//             resolveFn(res)
//         }
//     )
//     return p
// }

const divide = async (a: number, b: number) => {
    const res = a / b
    if (res === Infinity) {
        const err = new Error('divisior should not be zero')
        throw err
    }
    return res
}

const add = (a: number, b: number) => a + b

// const divPromise = divide(12, 3)
// divPromise
//     .then(
//         (addRes) => { console.log(addRes) },
//         (err: Error) => { console.log(err.message) }
//     )

async function callDivide() {
    try {
        const addRes = await divide(12, 0)
        console.log(addRes)
    } catch (error: any) {
        console.log(error.message)
    }
}
callDivide()

const addRes = add(12, 3)
console.log(addRes)