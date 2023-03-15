import Modal from './Modal'
import { useContext, useState } from 'react'

import { ACTIONS } from '../Cart/CartReducer'
import { CartContext } from '../../App'

function ProductsItem(props) {
  //handle display state of modal
  const [modalIsOpen, setModalIsOpen] = useState(false)
  //when click on more information shows modals
  const handleOnClickDetail = () => {
    setModalIsOpen(true)
  }
  //when click on x icon, close modal
  const handleOnClickCloseModal = () => {
    setModalIsOpen(false)
  }
  //when click on outside of modal, close modal
  const handleClickOutsideModal = () => {
    setModalIsOpen(false)
  }
  //get dispatch function of reducer from global context
  const { dispatch } = useContext(CartContext)
  return (
    <div className="tc w-100 pa3 ma2 flex items-center justify-between">
      <div className="flex">
        {/*show image from public folder*/}
        <img
          className="br-20 h4 w4 dib"
          alt={props.product.name}
          src={process.env.PUBLIC_URL + props.product.imgPath}
        />
        <div className="w5 ml3">
          <h2>{props.product.name}</h2>
          <span className="i underline" onClick={handleOnClickDetail}>
            More information
          </span>
          <Modal
            open={modalIsOpen}
            detail={props.product.description}
            onClickCloseModal={handleOnClickCloseModal}
            close={handleClickOutsideModal}
          />
        </div>
      </div>
      <div>
        <p>{props.product.price} Kr</p>
        {/*send action and payload data to reducer to handle*/}
        <p
          className="bg-light-gray br3 pa2 ma2 grow shadow-5 outline"
          onClick={() =>
            dispatch({ type: ACTIONS.ADD, payload: props.product })
          }
        >
          Add to Cart
        </p>
      </div>
    </div>
  )
}

export default ProductsItem
