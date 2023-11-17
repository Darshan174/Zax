import React, { useState } from 'react';
import "./Product.css";
import {useStateValue} from './StateProvider';

import reducer from './reducer';

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
  return (

    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <medium>$</medium>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>⭐</p>
                ))}
            </div>
        </div>    
        <img 
        src={image}
        alt=""
        />

        <button type="button" class="bg-gradient-to-r from-green-100 to-blue-200 hover:from-pink-100
         hover:to-yellow-100 font-semibold hover:text-black py-2 px-4  hover:border-transparent rounded-lg ..." onClick={addToBasket} >Add to Basket</button>
    </div>
    



  );
}

export default Product;
