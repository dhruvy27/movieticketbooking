import React from "react";
//hello
import { propTypes } from "react-bootstrap/esm/Image";
import Collapsible from 'react-collapsible';
import  './Accordion.css';

function Accordion({moviename,hallname}){
    return(
        <Collapsible className="Accordion" trigger={moviename}>
            <ul>
                <li>{hallname}</li>
                <li>{hallname}</li>
                <li>{hallname}</li>
            </ul>
        </Collapsible>
    )
}

export default Accordion;