import React, { useEffect } from "react";
import Accordion from "./Acordion";
import {homereduceraction} from '../../store/homereducer'
import Header from "./Header";
import { connect } from "react-redux";

import  './style/Accordion.css';

const mapStateToProps =(state)=>{
    return {
        allItem:state.home.allItem
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{getAllData:()=>dispatch(homereduceraction())}
    
}

function HomeScreen({getAllData,allItem}){
    useEffect(()=>{
        getAllData()
    },[])

    const store=allItem
    return(
        <div className="accordian-container">
            <Header/>
            {store.map((element)=>{
                return(
                <Accordion key ={element.movie_id} moviename={element.name} hallname={element.cinema_halls} link={element.poster} ></Accordion>
                )
            })}
        </div>
    )
}


export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);