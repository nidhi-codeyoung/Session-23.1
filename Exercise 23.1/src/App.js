import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <><div><h3>This is the example of Event Binding:</h3></div>
    <button onClick={shoot}>Take the shot!</button>
    </>
  );
}

export default App;