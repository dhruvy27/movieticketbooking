import React from "react";
import "./style/Modal.css";

export default function SuccessModal(props) {
  if (!props.showSuccess) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Congratulations</h3>
        </div>
        <div className="modal-body">
            <h1>{props.modalMssg}</h1>
        </div>
        <div className="modal-footer">
          <button onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}
