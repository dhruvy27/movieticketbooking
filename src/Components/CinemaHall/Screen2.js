import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { connect } from "react-redux";
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
    successfullPayment:()=>dispatch({type:"successfullPayment",payload:{}}),
    unsuccessfullPayment:()=>dispatch({type:"unsuccessfullPayment"}),
    addAllMovie:()=>dispatch({type:"addAllMovie",payload:{allItem:data}}),
  }
}


function Screen2({allItem,addAllMovie}) {

  useEffect(()=>{
    addAllMovie()
},[]) 
  const store = allItem
  console.log(store)

  const [searchParams, setSearchParams] = useSearchParams();
  const hallName = searchParams.get("hallName");
  const moviename = searchParams.get("moviename");
  const currenthall = store.filter((element) => element.name == moviename);
  //console.log(store)
  console.log(currenthall)
  return (
    <div>
      <div className="title">{moviename}</div>
      {currenthall[0].cinema_halls.map((element) => {
        return (
          <div>
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

export default connect(mapStateToProps,mapDispatchToProps)(Screen2);
