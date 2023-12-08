import { useEffect } from "react"

type CounterPropType = {
    countValue: number,
    increaseCount: () => void
}
const Counter = (props: Readonly<CounterPropType>) => {

    useEffect(
        () => {
            console.log('will be executed always')
            return () => {
                console.log('cleanup: will be executed in the next cycle, but first')
            }
        }
    )
    useEffect(
        () => {
            console.log('will be executed when new count value is received')
            return () => {
                console.log('cleanup: will be executed first, but only again new count value is received')
            }
        },
        [props.countValue]
    )

    useEffect(
        () => {
            console.log('will be executed only one time, the very first time component is mounted')
            return () => {
                console.log('cleanup: will be executed first, but only when component is unmonuted')
            }
        },
        []
    )
    console.log('Counter rendering...')
    return (
        <div>
            Counter:&nbsp;{props.countValue}
            <br />
            <button type="button" onClick={props.increaseCount}>
                Increase
            </button>
        </div>
    )
}

export default Counter