// ProductsContainer.js
import React, {useState} from 'react';
import Product from './Product';
import './ProductsContainer.css';

function ProductsContainer({ products, imageUrls }) {
  
  return (
    <div className="home__products">
        {products && imageUrls && products.map((product, index) =>(
        <Product
          key={product.id || index}
          id={product.id}
          title={product.title}
          image={imageUrls[index]}
          price={product.price}
          rating={product.rating}

        />
      ))}
    </div>
  );
}

export default ProductsContainer;