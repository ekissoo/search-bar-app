import React from "react";
import "./SearchResult.css";
import "./Button.css";
import { Wishlist } from "./Wishlist";

export const SearchResult = ({result}:{result:any}) => {

    /**
     * Each SearchResult component contains:
     * 1) Name of the corresponding product
     * 2) Button for wishlist
     * 3) View Product button
     */

    return (<div className ="search-result">{result.name}
    <Wishlist></Wishlist>
    <button type="button" className = "Button" >View</button>
    </div>)
};