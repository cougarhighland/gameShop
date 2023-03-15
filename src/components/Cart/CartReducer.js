//export a list of actions for dispatch to use
export const ACTIONS = {
  ADD: 'addToCart',
  REMOVE: 'removeFromCart',
}
//reducer function has parameters: current cartState, action from dispatch
//and return to a new state according to that action
function cartReducer(state, action) {
  //check action type
  switch (action.type) {
    case ACTIONS.ADD:
      //assign product data to object
      const { productNumber, name, price, description, imgPath } =
        action.payload
      //check if in cart already has product or not
      const cartItem = state.cart.find(
        (item) => item.productNumber === productNumber
      )
      //if product already in the cart, return a new state and increase the quantity of the product by 1
      if (cartItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.productNumber === productNumber
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        }
      } //if the product in not in the cart yet, create a quantity key/property for the product
      //push object to cart and, return a new state
      else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { productNumber, name, price, description, imgPath, quantity: 1 },
          ],
        }
      }
    case ACTIONS.REMOVE:
      //filter the product from cart out from the cart array and return a new state
      return {
        state,
        cart: state.cart.filter(
          (item) => item.productNumber !== action.payload
        ),
      }
    default:
      return state
  }
}

export default cartReducer
