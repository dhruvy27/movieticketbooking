import React from "react";
import "./Modal.css";

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
            <label>Card No.</label>
            <input type="text" id='cardnum'></input>
            <br />
            <label>CVV No.</label>
            <input type="text"></input><br />
            <button onClick={(e) => props.onCreditCardSubmit(e)}>Submit</button>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
