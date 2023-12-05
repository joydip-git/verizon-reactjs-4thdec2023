// const subtract = function (a: number, b: number) {
//     return a - b
// }
// const subtract = (a: number, b: number) => {
//      if(a-b>0)
//     return a - b
// }

// const subtract = (a: number, b: number) => a - b ? a - b : b - a
// const multiply = (a: number, b: number) => console.log(a * b)

// function outer() {
//     this.x = 100
//     console.log(this)
//     var ref = this
//     function inner() {
//         this.y = 200
//         //const res = this.x + this.y
//         const res = ref.x + this.y
//         console.log(this)
//         console.log(res)
//     }
//     inner()
// }

// function outer() {
//     this.x = 100
//     console.log(this)

//     let inner = function () {
//         this.y = 200
//         const res = this.x + this.y
//         console.log(this)
//         console.log(res)
//     }
//     inner = inner.bind(this)
//     inner()
// }

function foo() {
    this.state = {
        z: 300
    }
    console.log(this.state)

    let outer = () => {

        let newState = {
            ...this.state,
            x: 100
        }
        this.state = newState
        console.log(this)

        let inner = () => {
            let newInnerState = {
                ...this.state,
                y: 200
            }
            this.state = newInnerState
            const res = this.state.z + this.state.x + this.state.y
            console.log(this)
            console.log(res)
        }
        inner()
    }
    outer()
}

new foo()
