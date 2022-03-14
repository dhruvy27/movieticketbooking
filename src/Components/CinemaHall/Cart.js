import React from "react";
import { connect } from "react-redux";
import cartpic from '../util/carticon.jpg'
import "./style/Seats.css";


const mapStateToProps = (state,currentProps)=>{
  return {
    selectedSeats:state.selectedSeats
  }
}

function Cart({selectedSeats}) {
    
    
    console.log(selectedSeats)
    const key = Object.values(selectedSeats)
    console.log(key)
    console.log(selectedSeats)
    var counter=0
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

export default connect(mapStateToProps)(Cart)