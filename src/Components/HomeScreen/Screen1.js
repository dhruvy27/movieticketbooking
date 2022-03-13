import React, { useEffect } from "react";
import Accordion from "./Acordion";
import {useSelector, useDispatch} from 'react-redux'
import {addAllMovie} from '../../store/booking'
import data from '../../data.json'
import Header from "./Header";

import  './style/Accordion.css';

function Screen1(){
    const dispatch = useDispatch()
    const store = useSelector((element)=>{ return element.allItem })
   
    useEffect(()=>{dispatch(addAllMovie({
        allItem:data
    }))},[])
    return(
        <div className="accordian-container">
            <Header/>
            {store.map((element)=>{
                //console.log(element)
                return(
                <Accordion key ={element.movie_id} moviename={element.name} hallname={element.cinema_halls} link={element.poster} ></Accordion>
                )
            })}
        </div>
    )
}

export default Screen1;