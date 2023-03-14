export const ACTIONS = {
    ADD: "addToCart",
    REMOVE: "removeFromCart",
}

function cartReducer(state, action){
 
    switch(action.type){
        case ACTIONS.ADD:
            const {productNumber,name,price,description,imgPath} = action.payload;
            const cartItem = state.cart.find(item => item.productNumber === productNumber);
            if (cartItem) {
                return {
                    ...state,
                    cart: state.cart.map(item => item.productNumber === productNumber ? {...item, quantity: item.quantity + 1} : item)
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, {productNumber, name, price, description,imgPath, quantity: 1}]
                }
            }
        case ACTIONS.REMOVE:
            
            return {
                state,
                cart: state.cart.filter((item) => item.productNumber !== action.payload)
            }
          default:
            return state;
    }
}

export default cartReducer;