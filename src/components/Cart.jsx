import CartList from "./CartList";

function Cart(){
    return(
        <div className="flex items-center justify-center h-100">
            <div className="w-auto">
            <h1>Shopping Cart</h1>
            <CartList />
            </div>
        </div>
    )
}
export default Cart;