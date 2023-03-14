import './App.css';
import Search from './components/Search';
import products from './data/products';
import Cart from './components/Cart';
import { useReducer } from 'react';
import cartReducer from './components/CartReducer';
import { createContext } from 'react';


export const CartContext = createContext();
function App() {
    const initCartState = {cart:[]};

    const [cartState,dispatch] = useReducer(cartReducer, initCartState);
    
    const value = {
        cartState,
        dispatch
    }
   
   return( 
   <CartContext.Provider value={value}>
      <div className="flex">
        <Search products={products} />
        <Cart />
      </div>
    </CartContext.Provider>
  
  );
}

export default App;
