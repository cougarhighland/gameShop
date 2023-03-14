import ProductsItem from "./ProductsItem";

function ProductsList(props){
    const searchItem = props.productsList.map(product => <ProductsItem key={product.productNumber} product={product} />)
    return(
        <div>
            <h2>Search results</h2>
            <div className="flex flex-column">
            {searchItem}
            </div>
        </div>
    )
}

export default ProductsList;