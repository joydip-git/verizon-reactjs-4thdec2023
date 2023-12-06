//import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//App({data:100})
//new App({data:100}).render()
root.render(
  <App data={100} />
);

/*
setTimeout(
  () => {
    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );
    root.render(
      <App />
    );
  },
  5000
)
*/