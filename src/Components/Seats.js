import React, { useState } from "react";
import  './Seats.css';
import {useDispatch} from "react-redux"
import {changeStatus} from "../store/booking.js"

function Seats({setSelectedSeat,seat_info,selectedSeat,hall_id,movie_id}){
    const dispatch = useDispatch()
    //console.log(seats_selected)
    const onSelected =(event)=>{
        if(event.target.style.backgroundColor=="green")
        {
            event.target.style.backgroundColor="cyan"

            selectedSeat = selectedSeat.filter((element)=>{console.log(seat_info.seat_id,element) 
                return seat_info.seat_id!=element})

            console.log(selectedSeat)
            setSelectedSeat(selectedSeat)
            dispatch(changeStatus({
                id:seat_info.seat_id,
                hall_id:hall_id,
                movie_id:movie_id
            }))
            
        }
        else{
            event.target.style.backgroundColor="green"
            // selectedSeat.push(seat_info.seat_id)
            selectedSeat = [...selectedSeat,seat_info.seat_id]
            console.log(selectedSeat)
            setSelectedSeat(selectedSeat)
            dispatch(changeStatus({
                id:seat_info.seat_id,
                hall_id:hall_id,
                movie_id:movie_id
            }))
        }
    }
    
    return(
        <div >
            {seat_info.status === "unavailable" ? <div className="seat" id="seat" style={{backgroundColor:'#545454'}} >{seat_info.seat_id}</div>:<div className="seat" id="seat"  onClick={(event)=>{onSelected(event)}}  >{seat_info.seat_id}</div>}
        </div>
    )
}
export default Seats