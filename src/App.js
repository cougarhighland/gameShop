import './App.css';
import Search from './components/Search';
import products from './data/products';
import Cart from './components/Cart';
import { useReducer } from 'react';
import cartReducer from './components/CartReducer';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

export const CartContext = createContext();
function App() {
    const initCartState = {cart:[]};

    const [cartState,dispatch] = useReducer(cartReducer, initCartState);
    
    const value = {
        cartState,
        dispatch
    }

    const totalItems = () => {
      let total = 0;
      cartState.cart.map((item) => (total+=item.quantity))
      return total;
    }
   
   return( 
    <BrowserRouter>
    <CartContext.Provider value={value}>
      <nav className="pa3 pa4-ns">
        <NavLink className="link dim black b f3 dib mr3 pa3 underline-hover" to="/">Store</NavLink>
        <NavLink className="link dim gray f3 dib mr3 pa3 underline-hover" to="cart">Cart ({totalItems()})</NavLink>
     
    </nav>
    <Routes>
    <Route extract path="/" element={  <Search products={products} />} />
      <Route extract path="/cart" element={ <Cart />} />
    </Routes>
    </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
