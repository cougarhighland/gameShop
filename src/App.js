import './App.css';
import Search from './components/Search';
import products from './data/products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="flex">
      <Search products={products} />
      <Cart />
    </div>
  );
}

export default App;
