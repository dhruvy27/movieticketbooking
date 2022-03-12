import React from "react";
//hello
import { propTypes } from "react-bootstrap/esm/Image";
import Collapsible from 'react-collapsible';
import  './Accordion.css';
import {Link,useSearchParams} from 'react-router-dom'


// {<img  src={cartpic} id="cartpic"/>}
/* <Collapsible className="Accordion" trigger={moviename}></Collapsible> */

function Accordion({moviename,hallname,link}){

    return(
        <Collapsible className="Accordion" trigger={<img  src={link} id="poster"/>}>
            <div className="hall-container">
                {hallname.map((element)=>{
                    const url ="/screen2?hallName=" + element.name + "&&moviename="+moviename
                    return(
                        <div key={element.hall_id}><Link to={url} style={{ textDecoration: 'none',color: 'yellow'}} className="hall-list" >{element.name}</Link></div>
                )})}
            </div>
        </Collapsible>
    )
}

export default Accordion;