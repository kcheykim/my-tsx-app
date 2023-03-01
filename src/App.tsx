import React, { useState } from 'react';
//useState is use to store data inside a component
import logo from './logo.svg';
import './App.css';

function App() {

  const [people, setPeople] = useState([{
    name: "LeBron James",
    url: "",
    age: 36,
    note: "Guess what? Stop whining."
    },
    {
    name: "Kobe Bryant",
    url: "",
    age: 36,
    }
  ]);

  people.map(person => {
    person.age
  })

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
    </div>
  );
}

export default App;
