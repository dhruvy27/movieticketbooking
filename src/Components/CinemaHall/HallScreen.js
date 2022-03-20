import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { connect } from "react-redux";
import {homereduceraction} from '../../store/homereducer'
import {selectedseatsaction,changestatusaction,unsuccessfullaction} from '../../store/cinemahallreducer'
import data from "../../data.json";

import Hall from "./Hall";

const mapStateToProps = (state,currentProps)=>{
  return {
    selectedSeats:state.cinema.selectedSeats,
    allItem:state.home.allItem
  }
}
const mapDispatchToProps = (dispatch,currentProps)=>{
  return {
    successfullPayment:()=>dispatch(selectedseatsaction({})),
    unsuccessfullPayment:()=>dispatch(unsuccessfullaction()),
    addAllMovie:()=>dispatch(homereduceraction({allItem:data})),
  }
}


function HallScreen({allItem,addAllMovie}) {

  useEffect(()=>{
    addAllMovie()
}) 
  const store = allItem

  const [searchParams, setSearchParams] = useSearchParams();
  const hallName = searchParams.get("hallName");
  const moviename = searchParams.get("moviename");
  const currenthall = store.filter((element) => element.name == moviename);
  return (
    <div>
      <div className="title">{moviename}</div>
      {currenthall[0].cinema_halls.map((element) => {
        return (
          <div key={element.hall_id}> 
            {element.name == hallName ? (
              <Hall
                hall={element}
                key={element.hall_id}
                movie_id={moviename}
              ></Hall>
            ) : null}
          </div>
        );
      })}
      ;
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(HallScreen);
