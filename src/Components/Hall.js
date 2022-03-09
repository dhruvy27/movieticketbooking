import React, { useState } from "react";
import Seats from "./Seats";
import Cart from "./Cart";
import "./Seats.css";
import Modal from "./Modal";
import pic from './screenthisside2.png'

function Hall(props) {
  const hall = props.hall;
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [show, setShow] = useState(false);
  const [onCard, setOnCard] = useState([]);
  const onCreditCardSubmit = (e) => {
    e.preventDefault();
    const cardnum = document.getElementById('cardnum').value
    console.log(cardnum)
    if(cardnum.length<16){
        alert("enter valid data")
    }else{
        setShow(false);
        setOnCard(selectedSeat);
        setSelectedSeat([])
        alert('Payment Successfull')
    }
  };
  return (
    <div>
      <div className="seat-container">
        {hall.seats.map((element) => {
        //   {
        //     console.log(props.hall.hall_id);
        //   }
          return (
            <Seats
              seat_info={element}
              key={element.seat_id}
              setSelectedSeat={setSelectedSeat}
              selectedSeat={selectedSeat}
              hall_id={props.hall.hall_id}
              movie_id={props.movie_id}
              onCard={onCard}
            ></Seats>
          );
        })}
      </div>
      <div className="screen"><img src={pic}/></div>
      <div className="main-div">
        <Cart selectedSeat={selectedSeat} onCard={onCard}></Cart>
      </div>
      <button onClick={() => setShow(true)}>Checkout</button>
      <div>
        <Modal
          onCreditCardSubmit={onCreditCardSubmit}
          onClose={() => setShow(false)}
          show={show}
          selectedSeat={selectedSeat} 
          onCard={onCard}
        ></Modal>
      </div>
    </div>
  );
}

export default Hall;
