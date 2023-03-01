import React, { useState } from 'react'
//useState is use to store data inside a component
import List from './components/List';
import logo from './logo.svg';
import './App.css';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([]);

  return (
    <div className="App">
      <h1>People Invited To My Party</h1>
      <List people={people}/>
    </div>
  );
}

export default App;
