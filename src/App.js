import './App.css';

import React, {useState} from 'react'
import ListContainer from "./containers/ListContainer";

function App() {
  
  return (
    <div className="cntainer">
      <div className="row">
        <h1>Birthday reminders..</h1>
      </div>
        <div className="row">
          <ListContainer/>
        </div>
      
    </div>
  );
}

export default App;
