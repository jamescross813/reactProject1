import { Component } from "react";
import React, {useState} from 'react'
import List from "../components/List";

class ListContainer extends Component{
    
    render(){
        const [info, setInfo] = useState(data);
        return(
            <div>
                <List/>
            </div>
        )
    }
}

export default ListContainer