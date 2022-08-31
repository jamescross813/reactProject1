import './App.css';
import List from "./List";
import data from "./data"
import React, {useState} from 'react'

function App() {
  const [info, setInfo] = useState(data)
  console.log(info)
  return (
    <main>
      <section className="container">
        <h3>{info.length()} birthdays today</h3>
        <List info={info} />
        <button onClick={()=>{console.log("clicked me!")}}>Clear</button>
      </section>
    </main>
  );
}

export default App;
