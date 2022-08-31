import React, {useState} from 'react';
import List from "../components/List";
import data from '../data';

const ListContainer =()=>{
    
  
        const [info, setInfo] = useState(data);

        return(
            <>
                <section className="container">
                        <h3>{info.length} birthdays today</h3>
                        <List info={info} />
                        <button onClick={()=>{console.log("clicked me!")}}>Clear</button>
                </section>
            </>
        )
   
}

export default ListContainer