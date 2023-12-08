type NamePropType = {
    nameValue: string,
    updateName: (arg: string) => void
}
const Name = (props: Readonly<NamePropType>) => {
    console.log('Name rendering...')
    return (
        <div>
            <label htmlFor="txtName">Name:&nbsp;</label>
            <input type="text" id="txtName"
                value={props.nameValue}
                onChange={
                    (e) => {
                        const text = e.target.value
                        if (text && text !== '')
                            props.updateName(e.target.value)
                    }
                }
            />
        </div>
    )
}

export default Name