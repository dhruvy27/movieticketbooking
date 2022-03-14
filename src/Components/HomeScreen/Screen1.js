import React, { useEffect } from "react";
import Accordion from "./Acordion";
import {useSelector, useDispatch} from 'react-redux'
import {addAllMovie} from '../../store/booking'
import data from '../../data.json'
import Header from "./Header";
import { connect } from "react-redux";

import  './style/Accordion.css';


const mapStateToProps =(state,currentProps)=>{
    return {
        allItem:state.allItem
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{getAllData:()=>dispatch({type:"addAllMovie"})}
    
}

function Screen1({getAllData,allItem}){
    // const dispatch = useDispatch()
    // const store = useSelector((element)=>{ return element.allItem })
   
    // useEffect(()=>{dispatch(addAllMovie({
    //     allItem:data
    // }))},[])
    getAllData()
    const store=allItem
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


export default connect(mapStateToProps,mapDispatchToProps)(Screen1);