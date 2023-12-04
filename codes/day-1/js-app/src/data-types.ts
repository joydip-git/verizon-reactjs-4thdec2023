//type inference
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
