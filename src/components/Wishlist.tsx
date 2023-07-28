import React from 'react';
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import './Wishlist.css'

export const Wishlist = () =>{
    /**
     * Wishlist button can be used to wishlist an item.
     * This button triggers between white and red;
     */
    const [col, setCol] = React.useState("silver")
    let onChange = () =>{
        
        if(col === 'silver')
        {
            setCol('red')
        }
        if(col ==='red')
            setCol('silver')
    }
    return (

        <div className='Wishlist'
        style = {{color: col}} onClick={onChange}><i className='fa fa-heart'></i></div>
    )
}