import React from "react";
import Accordion from "./Acordion";


function Screen1(){
    return(
        <div>
            <Accordion moviename={"Movie 1"} hallname={"hall 1"} />
            <Accordion moviename={"Movie 2"} hallname={"hall 2"} />
            <Accordion moviename={"Movie 3"} hallname={"hall 3"} />
        </div>
    )
}

export default Screen1;