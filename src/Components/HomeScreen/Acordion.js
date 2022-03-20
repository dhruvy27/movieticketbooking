import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import Collapsible from 'react-collapsible';
import Trigger from "./Trigger";


import  './style/Accordion.css';
import {Link,useSearchParams} from 'react-router-dom'


function Accordion({moviename,hallname,link}){

    return(
        <Collapsible className="Accordion" trigger={<Trigger moviename={moviename} link={link} />}>
            <div className="hall-container">
                {hallname.map((element)=>{
                    const url ="/HallScreen?hallName=" + element.name + "&&moviename="+moviename
                    return(
                        <div key={element.hall_id}><Link to={url} style={{ textDecoration: 'none',color: 'yellow'}} className="hall-list" >{element.name}</Link></div>
                )})}
            </div>
        </Collapsible>
    )
}

export default Accordion;