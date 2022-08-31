import React, {useState} from 'react'
import List from "../components/List";

const ListContainer =()=>{
    
  
        // const [info, setInfo] = useState(data);
        const info = "Hello"
        return(
            <>
                <section className="container">
                        <h3>0 birthdays today</h3>
                        <List info={info} />
                        <button onClick={()=>{console.log("clicked me!")}}>Clear</button>
                </section>
            </>
        )
   
}

export default ListContainer