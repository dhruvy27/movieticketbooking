import React, {useEffect } from "react";
import "./style/Seats.css";
import {selectedseatsaction,changestatusaction,unsuccessfullaction} from '../../store/cinemahallreducer'
import { connect } from "react-redux";
const mapStateToProps = (state,{setSelectedSeat,
  selectedSeat,
  hall_id,
  movie_id,
  noOFSeats})=>{
  return {
    setSelectedSeat,
    selectedSeat,
    hall_id,
    movie_id,
    noOFSeats,
    allItem:state.home.allItem,
    selectedSeats:state.cinema.selectedSeats,
    confirmSeats:state.cinema.confirmSeats
  }
}
const mapDispatchToProps = (dispatch,currentProps)=>{
  return {
    successfullPayment:(payloadData)=>dispatch(selectedseatsaction(payloadData)),
    unsuccessfullPayment:()=>dispatch(unsuccessfullaction()),
    changeStatus:(payloadData)=>dispatch(changestatusaction(payloadData))
  }
}

function Seats({
  changeStatus,
  setSelectedSeat,
  selectedSeat,
  selectedSeats,
  hall_id,
  movie_id,
  noOFSeats,
  allItem,
  successfullPayment,
  confirmSeats
}) {
  const allBookedSeats = allItem
  var arr =[]
  for(var i=1;i<=noOFSeats;i++){
    arr.push(i)
}


  useEffect(() => {
    const hall = allBookedSeats.filter(ele=>{return ele.name==movie_id})

    const currentHall = hall[0].cinema_halls.filter(ele=>{
      return ele.hall_id==hall_id
    })
    currentHall[0].seats.map(ele=>successfullPayment({
      id:[ele.seat_id],status:ele.status=="available"?false:true
  }))
  }, []);

  const onSelected = (event) => {
    if (event.target.style.backgroundColor == "green") {
      setSelectedSeat(selectedSeat);
        changeStatus({
          id: event.target.dataset.value,
          hall_id: hall_id,
          movie_id: movie_id,
        })

    } else {
      event.target.style.backgroundColor = "green";
      selectedSeat = [...selectedSeat, event.target.dataset.value];
      setSelectedSeat(selectedSeat);
      changeStatus({
          id: event.target.dataset.value,
          hall_id: hall_id,
          movie_id: movie_id,
        })
      ;
    }
  };
  return (
    <div className="seats">

      {arr.map((element)=>{
 
          if(selectedSeats[element]!=undefined && selectedSeats[element]== true) { 
            return <div className="seat"  style={{ backgroundColor: "green" }} data-value ={element} onClick = {(event,element)=>onSelected(event,element)} >
            {element}{" "}</div>
          } else if(confirmSeats[element]!=undefined && confirmSeats[element]== true){
            return <div className="seat"  style={{ backgroundColor: "grey" }}>
            {element}{" "}</div>
          }
          else{
            return <div className="seat"  style={{ backgroundColor: "cyan" }} data-value ={element} onClick = {(event,element)=>onSelected(event,element)}>
            {element}{" "}</div>
          }
          
      })}
    </div>
  );
}
export default connect(mapStateToProps,mapDispatchToProps)(Seats);
