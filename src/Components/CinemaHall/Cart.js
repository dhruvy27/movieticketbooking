import React, { useState } from "react";
import {useSelector} from 'react-redux'
import cartpic from './carticon.jpg'
import "./Seats.css";

function Cart({selectedSeat}) {
    
    var counter=0

    const selectedSeats = useSelector((state)=>{
      return state.selectedSeats
    })
    console.log(selectedSeats)
    const key = Object.values(selectedSeats)
    console.log(key)
    console.log(selectedSeats)

    key.map((ele)=>{
      if(ele == true)
      counter++
    })
    console.log(counter,"counter")

    const totalprice =  150 *counter
  return (
      <div id="cart_value"><img  src={cartpic} id="cartpic"/>Total Cart Value : {totalprice}Rs</div>
  )
}

export default Cart