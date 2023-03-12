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
        <div className="flex-auto">
            <h1>The game store</h1>
            <div>
                <input className="ba b--black-20 pa2 mb2 db w-50" type="search" placeholder="Search..." onChange={handleOnChange} />
            </div>
            <ProductsList productsList={filteredProducts} />
        </div>
    )
}

export default Search;