import './App.css';

import React, {useState} from 'react'
import ListContainer from "./containers/ListContainer";

function App() {
  
  return (
    
    <>
    <head>
      <title>Birthdays</title>
    </head>
    <body>
      <div className="cntainer">
        <div className="row">
          <h1>Birthday reminders..</h1>
        </div>
          <div className="row">
            <ListContainer/>
          </div>
      </div>
    </body>
    </>
  );
}

export default App;
