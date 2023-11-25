// ProductsContainer.js
import React, {useState} from 'react';
import Product from './Product';
import './ProductsContainer.css';

function ProductsContainer({ products, imageUrls, onDeleteProduct }) {
  console.log(imageUrls);
  
  return (
    <div className="flex p-4">
    {products && imageUrls && products.map((product, index) => (
      <div key={product.id || index} className="px-2 ">
        <Product 
          id={product.id }
          title={product.title}
          image={imageUrls[index]}
          price={product.price}
          rating={product.rating}
          />

        <button className=" bg-gradient-to-r from-rose-100 to-rose-200 hover:from-red-100
         hover:to-red-100 font-semibold hover:text-black py-3 px-10  hover:border-transparent rounded-lg ... relative left-3 ... "onClick={() => onDeleteProduct(product.id)}>
          Delete
        </button>

      </div>
    ))}
  </div>
);
}

//   return (

//     <div className="home__products">
//         {products && imageUrls && products.map((product, index) =>(
//         <Product
//           key={product.id || index}
//           id={product.id}
//           title={product.title}
//           image={imageUrls[index]}
//           price={product.price}
//           rating={product.rating}

//           />
//       ))}
//     </div>

//   );
// }




export default ProductsContainer;