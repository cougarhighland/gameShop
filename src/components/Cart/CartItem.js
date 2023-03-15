import { CartContext } from '../../App'
import { ACTIONS } from './CartReducer'
import { useContext } from 'react'

function CartItem(props) {
  //use dispatch function from context for handle remove action in reducer
  const { dispatch } = useContext(CartContext)
  //calculate the total price from total quantity of the item in the cart
  const Total = () => {
    return props.product.quantity * props.product.price
  }
  return (
    <div className="pa3">
      <div className="flex flex-wrap tc ba mw8">
        {/*link the directory of image to public folder*/}
        <img
          className="br-20 h4 w4 dib"
          alt={props.product.name}
          src={process.env.PUBLIC_URL + props.product.imgPath}
        />
        <div className="ml3 flex-auto">
          <h2>{props.product.name}</h2>
          <span className="ph2">Quantity: {props.product.quantity}</span>
          <span className="ph2">Price: {props.product.price} Kr</span>
          <span className="ph2">Total: {Total()}</span>
        </div>
        {/*hand onClick action, send action type and data to reducer*/}
        <span
          className="f2 self-center ph5"
          onClick={() =>
            dispatch({
              type: ACTIONS.REMOVE,
              payload: props.product.productNumber,
            })
          }
        >
          🗑️
        </span>
      </div>
    </div>
  )
}
export default CartItem
