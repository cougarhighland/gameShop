import './App.css'
import Search from './components/Store/Search'
import products from './data/products'
import Cart from './components/Cart/Cart'
import { useReducer } from 'react'
import cartReducer from './components/Cart/CartReducer'
import { createContext } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
//use context hook to give access of states in global scope of application;
export const CartContext = createContext()
function App() {
  const initCartState = { cart: [] }
  //useReducer is to handle many states based on many type of actions (dispatch)
  const [cartState, dispatch] = useReducer(cartReducer, initCartState)
  //send object of properites that all components can access
  const value = {
    cartState,
    dispatch,
  }
  //calculate of total items in cart
  const totalItems = () => {
    let total = 0
    cartState.cart.map((item) => (total += item.quantity))
    return total
  }
  //navigate between pages/components with routes and navlinks
  return (
    <BrowserRouter>
      {/*provide cartState and dispatch access to child components*/}
      <CartContext.Provider value={value}>
        <nav className="pa3 pa4-ns">
          <NavLink
            className="link dim black b f3 dib mr3 pa3 underline-hover"
            to="/"
          >
            Store
          </NavLink>
          <NavLink
            className="link dim gray f3 dib mr3 pa3 underline-hover"
            to="cart"
          >
            Cart ({totalItems()})
          </NavLink>
        </nav>
        <Routes>
          <Route extract path="/" element={<Search products={products} />} />
          <Route extract path="/cart" element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  )
}

export default App
