import './App.css';
import Search from './components/Search';
import products from './data/products';

function App() {
  return (
    <div className="App">
      <Search products={products} />
    </div>
  );
}

export default App;
