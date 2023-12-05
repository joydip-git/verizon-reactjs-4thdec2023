import './App.css';
import { Welcome } from './Welcome';

function App() {
  let messageData = 'Welcome to React JS'
  // const welcomeReactElement = Welcome({ })

  const updateMessage = (newMessage: string) => {
    console.log(messageData)
    messageData = newMessage
    console.log(messageData)
  }

  return (
    <div className="App">
      {/*welcomeReactElement */}
      <Welcome
        message={messageData}
        messageHandler={updateMessage}
      />
    </div>
  );
}

export default App;
