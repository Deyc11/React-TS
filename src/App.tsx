import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from "./components/List"
import AddToList from './components/AddToList';

export interface IState{
  people:{
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSheZXnf27LhoKkcVFu_IbieY6fXIRG4U1Dvj8EMoH_qyWZyHtv",
      age:36,
      note: "aephirtgbjyekčmesnfmw<ačoeifnj"
    }
  ])

  return (
    <div className="App">
      <h1>Vabljeni</h1>
      <List people ={people}/>
      <AddToList people = {people} setPeople = {setPeople}/>
    </div>
  );
}

export default App;
