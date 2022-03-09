import React, { useState } from "react";
import cartpic from './carticon.jpg'
import "./Seats.css";

function Cart({selectedSeat}) {
    console.log(selectedSeat)
    const totalprice =  150 * selectedSeat.length
  return (
    // <img  src={cartpic} id="cartpic"/>
      <div id="cart_value"><img  src={cartpic} id="cartpic"/>Total Cart Value : {totalprice}Rs</div>
  )
}

export default Cart