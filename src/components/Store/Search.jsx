import { useState } from 'react'
import ProductsList from './ProductsList'

function Search(props) {
  //handle state of search keywords
  const [searchKeyWords, setSearchKeyWords] = useState('')
  //filer out a product list which contains keyword in product name or product description
  const filteredProducts = props.products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchKeyWords.toLowerCase()) ||
      product.description.toLowerCase().includes(searchKeyWords.toLowerCase())
    )
  })
  //handle change state of search keywords
  const handleOnChange = (event) => {
    setSearchKeyWords(event.target.value)
  }

  return (
    <div className="flex items-center justify-center h-100">
      <div className="w-auto">
        <h1>The game store</h1>
        <input
          className="ba b--black-20 pa2 mb2 db w-100"
          type="search"
          placeholder="Search..."
          onChange={handleOnChange}
        />
        <ProductsList productsList={filteredProducts} />
      </div>
    </div>
  )
}

export default Search
