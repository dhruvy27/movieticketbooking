import React, { useState,useEffect } from "react";
import "./Seats.css";
import { useDispatch } from "react-redux";
import { changeStatus,successfullPayment } from "../../store/booking.js";
import {useSelector} from 'react-redux'

function Seats({
  setSelectedSeat,
  selectedSeat,
  hall_id,
  movie_id,
}) {
  const dispatch = useDispatch();
  const allBookedSeats = useSelector(state=>{
    return state.allItem
  })

  useEffect(() => {
    const hall = allBookedSeats.filter(ele=>{return ele.name==movie_id})
  const currentHall = hall[0].cinema_halls.filter(ele=>{
    //console.log(ele.hall_id,hall_id)
    return ele.hall_id==hall_id})
  //console.log(currentHall[0])
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
  
  const seats = useSelector((state)=>{
    return state.seats
  })

  console.log(confirmSeats,selectedSeats)
  console.log(movie_id)
  console.log(hall_id)

  
  
  
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
      {console.log("element")}
      {console.log(confirmSeats[1])}
      {seats.map((element)=>{
        //console.log(element,"element here")
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
