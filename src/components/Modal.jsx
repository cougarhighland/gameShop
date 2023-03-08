import React from 'react'
import "../styles/Modal.css"
function Modal({open,detail,onClickCloseModal,close}) {
  return open? (
    <div>
        <div className="overlay" onClick={() => {close()}}></div>
      <div className="modal">
         <button className="closeButton" onClick={onClickCloseModal}>X</button>
        <div>
            {detail}
        </div>
    </div>
    </div>
  ):null;
}

export default Modal;
