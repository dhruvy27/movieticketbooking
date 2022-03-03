import React from "react";
//hello
import { propTypes } from "react-bootstrap/esm/Image";
import Collapsible from 'react-collapsible';

function Accordion({moviename,hallname}){
    return(
        <Collapsible trigger={moviename}>
            <ul>
                <li>{hallname}</li>
                <li>{hallname}</li>
                <li>{hallname}</li>
            </ul>
        </Collapsible>
    )
}

export default Accordion;