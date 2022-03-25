import React from 'react';
import ReactDOM from 'react-dom';
import Test from './components/test/test';

function App() {
  return (
    <Test />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
