import { CartContext } from "../App";
import { ACTIONS } from "./CartReducer";
import { useContext } from "react";

function CartItem(props){
    const {dispatch} = useContext(CartContext);
    const Total = () =>{
        return props.product.quantity * props.product.price;
    };
    return(
        <div>
             <div className="flex">
          <img className="br-20 h4 w4 dib" alt={props.product.name} src={process.env.PUBLIC_URL + props.product.imgPath} />
          <div className="w5 ml3">
            <h2>{props.product.name}</h2>
            <span>Quantity: {props.product.quantity}</span>
            <span>Price: {props.product.price} Kr</span>
            <span>Total: {Total()}</span>
          </div>
          </div>
            <p onClick={() =>dispatch({type:ACTIONS.REMOVE,payload: props.product.productNumber})}>Remove</p>
        </div>
    )
}
export default CartItem;