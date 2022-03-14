import React, { useState,useEffect } from "react";
import "./style/Seats.css";
import { useDispatch } from "react-redux";
import { changeStatus,successfullPayment } from "../../store/booking.js";
import {useSelector} from 'react-redux'
import seatsarray from "../util/seatsarray";
import store from "../../store/storeconfig";

function Seats({
  setSelectedSeat,
  selectedSeat,
  hall_id,
  movie_id,
  noOFSeats,
}) {
  const dispatch = useDispatch();
  const allBookedSeats = useSelector(state=>{
    return state.allItem
  })

  console.log(noOFSeats)
  var arr =[]
  for(var i=1;i<=noOFSeats;i++){
    arr.push(i)
}


  useEffect(() => {
    const hall = allBookedSeats.filter(ele=>{return ele.name==movie_id})

    const currentHall = hall[0].cinema_halls.filter(ele=>{
      return ele.hall_id==hall_id
    })
    currentHall[0].seats.map(ele=>dispatch(successfullPayment({
      id:[ele.seat_id],status:ele.status=="available"?false:true
  })))
  }, []);


  const selectedSeats = useSelector((state)=>{
    return state.selectedSeats
  })
  const confirmSeats =useSelector((state)=>{
    return state.confirmSeats
  })
  
  // const seats = useSelector((state)=>{
  //   return state.seats
  // })


  const onSelected = (event) => {
    // console.log(event)
    if (event.target.style.backgroundColor == "green") {
      console.log(selectedSeat);
      setSelectedSeat(selectedSeat);
      dispatch(
        changeStatus({
          id: event.target.dataset.value,
          hall_id: hall_id,
          movie_id: movie_id,
        })
      );

    } else {
      event.target.style.backgroundColor = "green";
      selectedSeat = [...selectedSeat, event.target.dataset.value];
      console.log(selectedSeat);
      setSelectedSeat(selectedSeat);
      dispatch(
        changeStatus({
          id: event.target.dataset.value,
          hall_id: hall_id,
          movie_id: movie_id,
        })
      );
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
export default Seats;
