import { useState } from "react";
import ProductsList from "./ProductsList";

function Search(props){
    const [searchKeyWords, setSearchKeyWords] = useState("");
    const filteredProducts = props.products.filter(
        product => {
            return(
                product.name.toLowerCase().includes(searchKeyWords.toLowerCase()) ||
                product.description.toLowerCase().includes(searchKeyWords.toLowerCase())
            );
        }
    );

    const handleOnChange = (event) => {
        setSearchKeyWords(event.target.value);
    }

    return(
        <div className="flex items-center justify-center h-100">
            <div className="w-auto">
            <h1>The game store</h1>
                <input className="ba b--black-20 pa2 mb2 db w-100" type="search" placeholder="Search..." onChange={handleOnChange} />
                <ProductsList productsList={filteredProducts} />
            </div>
        </div>
    )
}

export default Search;