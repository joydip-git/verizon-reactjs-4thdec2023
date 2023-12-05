type WelcomePropType = {
    message?: string;
    messageHandler: (arg: string) => void
}
export const Welcome = (props: WelcomePropType) => {
    return (
        <div>
            {
                props.message ? props.message : 'NA'
            }
            <br />
            <div>
                <label htmlFor="txtMessage">
                    Type New Message: &nbsp;&nbsp;
                </label>
                <input
                    type="text"
                    id="txtMessage"
                    value={props.message}
                    onChange={
                        (e) => {
                            const newMessage = e.target.value
                            props.messageHandler(newMessage)
                        }
                    } />
            </div>
        </div>
    )
}

/*
<button type="button" onClick={
                (e) => {
                    console.log(e)
                    props.messageHandler('Learning React')
                }
            }>
                Change Message
            </button>
*/