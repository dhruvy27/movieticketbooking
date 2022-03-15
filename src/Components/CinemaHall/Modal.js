import React from "react";
import "./style/Modal.css";
import { connect } from "react-redux";
const mapStateToProps = (state,currProps)=>{
  return {
    selectedSeat:state.cinema.selectedSeats,
    props:currProps
  }
}

const Modal = ({selectedSeat,props})=>{

  const calculate = (selectedSeats)=>{
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
    return totalprice
  }

  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Total Value :{calculate(selectedSeat)}Rs</h3>
        </div>
        <div className="modal-body">
          <form>
            <label id="input-label">Card No.</label>
            <input type="text" id='cardnum' required></input>
            <br />
            <label id="input-label">CVV No.</label>
            <input type="text" id="cvv" required></input><br />
            
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose} >Close</button>
          <button onClick={(e) => props.onCreditCardSubmit(e)} id="submit">Submit</button>
        </div>
      </div>
    </div>
  );
}


export default connect(mapStateToProps)(Modal)