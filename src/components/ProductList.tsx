import React from 'react';
import "./ProductList.css";
import { SearchResult } from './SearchResult';

/**
 * 
 * ProductList componet renders the filterd list of products one by one.
 */
export const ProductList = ({results}:{results:any}) =>{
    return (
        <div className= "product-list">
            {
                // * ProductList will render a SearchResult component corresponding to each product.
               results.map((result:any,id:any) =>{
                return (<SearchResult result={result} key={id}></SearchResult>
                );
               })
            }
        </div>
    )
}