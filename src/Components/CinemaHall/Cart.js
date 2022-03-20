import React from "react";
import { connect } from "react-redux";
import cartpic from '../util/carticon.jpg'
import "./style/Seats.css";


const mapStateToProps = (state,currentProps)=>{
  return {
    selectedSeats:state.cinema.selectedSeats
  }
}

function Cart({selectedSeats}) {
    
    

    const key = Object.values(selectedSeats)

    var counter=0
    key.map((ele)=>{
      if(ele == true)
      counter++
    })

    const totalprice =  150 *counter
  return (
      <div id="cart_value"><img  src={cartpic} id="cartpic"/>Total Cart Value : {totalprice}Rs</div>
  )
}

export default connect(mapStateToProps)(Cart)