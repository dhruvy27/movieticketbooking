import React, { useState } from "react";
import {selectedseatsaction,changestatusaction,unsuccessfullaction} from '../../store/cinemahallreducer'
import { connect } from "react-redux";
import Seats from "./Seats";
import Cart from "./Cart";
import Modal from "./Modal";
import SuccessModal from "./SuccessModal"
import pic from '../util/screenthisside.png'
import valiadtion from "../util/Validation";

import "./style/Seats.css";

const mapStateToProps= (state,currentProps)=>{  
  return {
    props:currentProps,
  }
}
const mapDispatchToProps = (dispatch,currentProps)=>{
  return {
    successfullPayment:()=>dispatch(selectedseatsaction({})),
    unsuccessfullPayment:()=>dispatch(unsuccessfullaction())
  }
}

function Hall({props,successfullPayment,unsuccessfullPayment}) {
  const noOFSeats = props.hall.seats.length

  const hall = props.hall;
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [show, setShow] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [modalMssg,setModalMssg] = useState('')
  const [onCard, setOnCard] = useState([]);
  const [inputcardnum,setcardnum] = useState();
  const [inputcvv,setcvv] = useState();
  

  const onCreditCardSubmit = (e) => {
    e.preventDefault();
    const valid = valiadtion(inputcardnum,inputcvv)

    if(valid == false){
      setModalMssg("Invalid Entry")
      setShowSuccess(true)
      unsuccessfullPayment()
      setShow(false);
    }else{
        setShow(false);
        setOnCard(selectedSeat);
        setSelectedSeat([])
        setModalMssg("Payment Successful")
        setShowSuccess(true)
        successfullPayment()

    }
  };


  return (
    <div>
      <div className="seat-container" id="seat-Id">
            <Seats
            setSelectedSeat={setSelectedSeat}
            selectedSeat={selectedSeat}
            hall_id={props.hall.hall_id}
            movie_id={props.movie_id}
            onCard={onCard}
            noOFSeats={noOFSeats}
            ></Seats>
            <div className="screen"><img src={pic} id= "screen-img" /></div>
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
          setcardnum={setcardnum}
          setcvv = {setcvv}
        ></Modal>
        <SuccessModal onClose={() => setShowSuccess(false)} showSuccess={showSuccess} setModalMssg={setModalMssg} modalMssg={modalMssg} ></SuccessModal>
      </div>
    </div>
  );
}

export default connect(mapStateToProps,mapDispatchToProps)(Hall);
