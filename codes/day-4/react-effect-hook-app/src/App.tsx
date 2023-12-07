import { useState } from 'react';
import './App.css';
import Name from './Name';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState<number>(0)
  const [name, setName] = useState<string>('')

  const countHandler = () => {
    setCount(
      (current) => current + 1
    )
  }

  const nameHandler = (newName: string) => {
    setName(newName)
  }

  console.log('App rendering...')
  return (
    <div className="App">
      <Name nameValue={name} updateName={nameHandler} />
      <br />
      <br />
      <Counter countValue={count} increaseCount={countHandler} />
    </div>
  );
}

export default App;
