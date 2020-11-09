import React from "react";
import './Tshirt.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        <div className="text-right">
            <a href="javascript:;" className="modal-close btn btn-outline-secondary" onClick={handleClose}>
          close
        </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
