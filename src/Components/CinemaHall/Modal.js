import React from "react";
import "./style/Modal.css";

export default function Modal(props) {
  if (!props.show) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Total Value :{150*(props.selectedSeat).length}Rs</h3>
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
