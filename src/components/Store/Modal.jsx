import React from 'react'
import '../../styles/Modal.css'
function Modal({ open, detail, onClickCloseModal, close }) {
  //check open property got from productsItem component, if true show the modal, else not show
  return open ? (
    <div>
      {/*The overlay div to make surrounding background of modal darker
      and when user clicks outside of modal, the modal will be disappeared*/}
      <div
        className="overlay"
        onClick={() => {
          close()
        }}
      ></div>
      <div className="modal">
        {/*when user clicks on the x icon on top right coner of the modal, the modal will be closed*/}
        <button className="closeButton" onClick={onClickCloseModal}>
          X
        </button>
        {/*show product description on the screen*/}
        <div>{detail}</div>
      </div>
    </div>
  ) : null
}

export default Modal
