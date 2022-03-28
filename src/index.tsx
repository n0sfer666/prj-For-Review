import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  // const getUsers =
  const users: Array<Record<string, unknown>> = [];
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json(), (error) => console.error(error))
    .then((data: Array<Record<string, unknown>>) => data.forEach(
      (user: Record<string, unknown>) => {
        users.push(user);
      },
    ));

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
