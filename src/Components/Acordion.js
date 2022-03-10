import React from "react";
//hello
import { propTypes } from "react-bootstrap/esm/Image";
import Collapsible from 'react-collapsible';
import  './Accordion.css';
import {Link,useSearchParams} from 'react-router-dom'



export function dhruv(element){
    console.log(element)
    return element
}

function Accordion({moviename,hallname}){

    return(
        <Collapsible className="Accordion" trigger={moviename}>
            <ul>
                {hallname.map((element)=>{
                    const url ="/screen2?hallName=" + element.name + "&&moviename="+moviename
                    return(
                        <li key={element.hall_id} onClick={()=>dhruv(element)}><Link to={url} style={{ textDecoration: 'none',color: 'yellow'}}>{element.name}</Link></li>
                )})}
            </ul>
        </Collapsible>
    )
}

export default Accordion;