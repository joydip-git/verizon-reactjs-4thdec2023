type CounterPropType = {
    countValue: number,
    increaseCount: () => void
}
const Counter = (props: Readonly<CounterPropType>) => {
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