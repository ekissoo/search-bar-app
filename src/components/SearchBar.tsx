import "./SearchBar.css";
import {faker} from '@faker-js/faker';
import React, {useState} from "react";
import {FaSearch} from "react-icons/fa";

const SearchBar = ({setResults}:{setResults:any})=>{
    const [input, setInput] = useState(""); 


    /**
     * 
     * "fetchData()" takes in the string that the user is searching for.
     * Faker api is used here.
     * fetch() function is used which returns a promise.
     * We can use ".then()" to collect the json data of the response
     * Array funtion "filter()" is used.
     * filter() will filter all the entries in the json response containing search_str
     * filter() saves the the requried products in "results" array
     */
    const fetchData = (search_str:any) =>{
        fetch("https://fakerapi.it/api/v1/products?_quantity=10&_taxes=12&_categories_type=uuid")
        .then((response) => response.json())
        .then((json) => {
            json = json.data; // json response is initially object, and json.data is Array of data that we need.
            const results = json.filter((product: any)=>{
                return product.name.toLowerCase().includes(search_str);
            });
            setResults(results);
        });

    }
    /**
     * "handleChange()" takes in a string val.
     * Sets the setInput varialbe to the provided string.
     * And calls for fetchData() for the same string.
     * 
     */
    const handleChange  = (search_str:any) =>{
        setInput(search_str);
        fetchData(search_str);
    }
    return (
        /**
         * search_str is initialized by the input variable.
         *  Whenever the user changes the input parameter, 
         *  Set the input variable to the value inside <input>
         */
        <div className = "input-wrapper">
            <FaSearch id = "search-icon"></FaSearch>
            <input placeholder = "Search Zevi.ai"
            value = {input} 
            onChange = {(e: React.FormEvent<HTMLInputElement>) => handleChange(e.currentTarget.value)}>
            </input>
        </div>
    )
}
export default SearchBar;