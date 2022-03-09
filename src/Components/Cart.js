import React, { useState } from "react";

function Cart({selectedSeat}) {
    console.log(selectedSeat)
    const totalprice =  150 * selectedSeat.length
  return (
    <div id="cart_value">Total Cart Value : {totalprice}Rs</div>
  )
}

export default Cart