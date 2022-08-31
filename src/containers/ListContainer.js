import { Component } from "react";
import React, {useState} from 'react'
import List from "../components/List";

class ListContainer extends Component{
    
    render(){
        const [info, setInfo] = useState(data);
        return(
            <div>
                <main>
                    <section className="container">
                        <h3>{info.length()} birthdays today</h3>
                        <List info={info} />
                        <button onClick={()=>{console.log("clicked me!")}}>Clear</button>
                    </section>
                </main>
            </div>
        )
    }
}

export default ListContainer