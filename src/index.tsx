import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [state, setState] = useState('loading');
  const users: Array<Record<string, unknown>> = [];
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json(), () => setState('error'))
    .then((data: Array<Record<string, unknown>>) => {
      data.forEach(
        (user: Record<string, unknown>) => {
          users.push(user);
        },
      );
      setState('loaded');
    });

  return (
    <div>
      test
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
