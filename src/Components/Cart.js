import React, { useState } from "react";

function Cart({selectedSeat}) {
    console.log(selectedSeat)
  return (
    <div>cart{selectedSeat}</div>
  )
}

export default Cart