let globalData = 100

function outer() {
    let x = 10
    console.log(x + globalData)

    function inner() {
        let y = 20
        let res = x + y + globalData
        console.log(res)
    }
    return inner
}

const innerFnRef = outer()
innerFnRef()