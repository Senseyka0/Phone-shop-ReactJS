import React from "react";

import "./Modal.scss";

function Modal(props) {
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <h1>{props.item.name}</h1>
      </div>
    </div>
  );
}

export default Modal;
