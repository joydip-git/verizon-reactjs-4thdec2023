//function main(){
//type inference
/*
var strValue = 'JavaScript'
var intValue = 12
var floatValue = 12.34
var boolValue = true
console.log(typeof strValue, strValue)
console.log(typeof intValue, intValue)
console.log(typeof floatValue, floatValue)
console.log(typeof boolValue, boolValue)

function add(a: number, b: number): number {
    return a + b
}
console.log(add(12, 13))
*/

//console.log(x)//? undefined
var m = 100
function call() {
    //this.y=20
    var x
    x = 10 //let, const
    console.log(x)//? 10
    for (var i = 0; i < 1; i++) {
        var x
        x = 20
        console.log(x)//? 20
    }
    console.log(x)//? 10 or 20

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
}
call()
//}
//main()