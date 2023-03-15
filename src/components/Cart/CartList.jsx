import { useContext } from 'react'
import { CartContext } from '../../App'
import CartItem from './CartItem'

function CartList(props) {
  //use cartstate from context
  const { cartState } = useContext(CartContext)
  //list out items from the list to show on the cart
  const listItem = cartState.cart.map((product) => (
    <CartItem key={product.productNumber} product={product} />
  ))
  //calculate the total price needed to pay for all items in the cart
  const Total = () => {
    let total = 0
    cartState.cart.map((item) => (total += item.price * item.quantity))

    return total
  }
  return (
    <div>
      <div className="flex flex-column">{listItem}</div>
      <h1>Total: {Total()} Kr</h1>
    </div>
  )
}
export default CartList
