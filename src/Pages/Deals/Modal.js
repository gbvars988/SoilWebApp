import React from "react";
import "./modal.css";

function Modal(props) {
  if (!props.isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={props.onClose}>
      <div className="modal-content">
        {props.children}
        <button onClick={props.onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
