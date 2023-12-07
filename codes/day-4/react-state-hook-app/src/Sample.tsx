import { Component, PureComponent, ReactNode, memo, useState } from "react"

let i = 0
const Sample = () => {

    const [count, setCount] = useState<number>(0)

    const increaseCount = () => {
        //setCount(10)
        setCount(
            (currentCount) => {
                return currentCount + 1
            }
        )
    }

    console.log('sample rendered. VDOM#' + (++i))
    return (
        <div>
            Count:&nbsp;{count}
            <br />
            <button type="button" onClick={increaseCount}>
                Increase
            </button>
        </div>
    )
}

export default memo(Sample)

// function mymemo(c: Component<P, S>) {
//     class SampleX extends Component {
//         shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
//             return true
//         }
//         render(): ReactNode {
//             return c
//         }
//     }
//     return SampleX
// }

function myusateState<T>(initialState: T) {

    let state = initialState
    const setState = (newState?: T, callback?: (val: T) => T) => {
        if (newState)
            state = newState

        if (callback) {
            state = callback(state)
        }
    }


    return [state, setState]
}