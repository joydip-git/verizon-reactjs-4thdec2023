import { useState } from 'react';
import './App.css';
import Sample from './Sample';

function App() {
  const [show, setShow] = useState<boolean>(true)
  const [name, setName] = useState<string>('')
  return (
    <div className="App">
      <div>
        <label htmlFor="txtName">Name: &nbsp;</label>
        <input
          type="text"
          id='txtName'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <button type="button" onClick={
        () => setShow(cs => !cs)
      }>
        {
          show ? 'Hide' : 'Show'
        }
      </button>
      <br />
      {show && <Sample />}
    </div>
  );
}

export default App;
