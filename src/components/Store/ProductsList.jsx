import ProductsItem from './ProductsItem'

function ProductsList(props) {
  //mapping a list of product and pass data product to Product component to handle individually to show on screen
  const searchItem = props.productsList.map((product) => (
    <ProductsItem key={product.productNumber} product={product} />
  ))
  return (
    <div>
      <h2>Search results</h2>
      <div className="flex flex-column">{searchItem}</div>
    </div>
  )
}

export default ProductsList
