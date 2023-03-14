
import Modal from "./Modal";
import { useContext, useState } from "react";

import { ACTIONS } from "./CartReducer";
import { CartContext } from "../App";

function ProductsItem(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOnClickDetail = () => {setModalIsOpen(true);};
  const handleOnClickCloseModal = () => {setModalIsOpen(false);};
  const handleClickOutsideModal = () => {setModalIsOpen(false);};

  const context = useContext(CartContext);
    return(
        <div className="tc w-50 pa3 ma2 flex items-center justify-between">
          <div className="flex">
          <img className="br-20 h4 w4 dib" alt={props.product.name} src={process.env.PUBLIC_URL + props.product.imgPath} />
          <div className="w5 ml3">
            <h2>{props.product.name}</h2>
            <span className="i underline" onClick={handleOnClickDetail}>More information</span>
            <Modal open={modalIsOpen} detail={props.product.description} onClickCloseModal={handleOnClickCloseModal} close={handleClickOutsideModal}/>
          </div>
          </div>
          <div>
          <p>{props.product.price} Kr</p>
          <p className="bg-light-gray br3 pa2 ma2 grow shadow-5 outline" onClick={() =>context.dispatch({type:ACTIONS.ADD, payload:props.product})}>Add to Cart</p>
          </div>
        </div>
      );
}

export default ProductsItem;