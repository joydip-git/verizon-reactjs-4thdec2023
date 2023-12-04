//console.log(x)//? undefined
var m = 100
function call() {
    const data = 10
    //data = 20
    let x
    x = 10
    console.log(x)//? 10
    for (let i = 0; i < 1; i++) {
        let x
        x = 20
        console.log(x)//? 20
    }
    console.log(x)//? 10

    //function declaration
    inner()
    function inner() {
        console.log('inner')
    }
    inner()

    //another()
    //function expression
    var another
    another = function () {
        console.log('another')
    }
    another()
}
call()