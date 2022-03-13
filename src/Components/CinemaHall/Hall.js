import React, { useState } from "react";
import Seats from "./Seats";
import Cart from "./Cart";
import "./Seats.css";
import Modal from "./Modal";
import SuccessModal from "./SuccessModal"
import {successfullPayment,unsuccessfullPayment,changeStatus} from '../../store/booking'
import pic from './screenthisside.png'
import {useDispatch} from 'react-redux'

function Hall(props) {

const dispatch = useDispatch()

  const hall = props.hall;
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [modalMssg,setModalMssg] = useState('')
  const [onCard, setOnCard] = useState([]);
  
  
  const onCreditCardSubmit = (e) => {
    e.preventDefault();
    const cardnum = document.getElementById('cardnum').value
    const cvv = document.getElementById('cvv').value

    if(cardnum.length<16 || cvv.length!=3){
      setModalMssg("Invalid Entry")
      setShowSuccess(true)
      //setSelectedSeat([])
      dispatch(unsuccessfullPayment())
      setShow(false);
    }else{
        setShow(false);
        setOnCard(selectedSeat);
        setSelectedSeat([])
        setModalMssg("Payment Successful")
        setShowSuccess(true)
        dispatch(successfullPayment({}))

    }
  };


  return (
    <div>
      <div className="seat-container" id="seat-Id">
            <Seats
            // seat_info={element}
            // key={element.seat_id}
            setSelectedSeat={setSelectedSeat}
            selectedSeat={selectedSeat}
            hall_id={props.hall.hall_id}
            movie_id={props.movie_id}
            onCard={onCard}
            ></Seats>
            <div className="screen"><img src={pic}/></div>
            <div className=" eyes-text"><h1>EYES THIS SIDE</h1></div>
      </div>
      
      <div className="cart-div">
        <Cart selectedSeat={selectedSeat}></Cart>
      </div>
      <div className="checkout"><button onClick={() => setShow(true)}  >Checkout</button></div>
      <div>
        <Modal
          onCreditCardSubmit={onCreditCardSubmit}
          onClose={() => setShow(false)}
          show={show}
          selectedSeat={selectedSeat} 
        ></Modal>
        <SuccessModal onClose={() => setShowSuccess(false)} showSuccess={showSuccess} setModalMssg={setModalMssg} modalMssg={modalMssg} ></SuccessModal>
      </div>
    </div>
  );
}

export default Hall;
