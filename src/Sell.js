import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import Upload from "./Upload";
import "./Sell.css";
import ProductsContainer from "./ProductsContainer";
import { v4 as uuidv4 } from 'uuid'

function Sell() {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);



  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);

  const generateUniqueId = () => {
    return uuidv4();
  };

  const addProduct = (product) => {
    const updatedProducts = [...products,{ ...product, id: generateUniqueId() }];
    setProducts(updatedProducts);

    // Save updated products to localStorage
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleImageUpload = (urls) => {
    setImageUrls(urls);
    console.log(urls);
  };

  const handleDeleteProduct = (productId) => {
    // Filter out the product with the given productId
    const updatedProducts = products.filter((product) => product.id !== productId);

    // Update the products state and localStorage
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };



  return (
    <div className="bg-gradient-to-r from-rose-200 via-gray-100 to-rose-200 ..." >
      <h1 class=" border-solid border-2 border-rose-500 ...  hover:border-2 border-rose-400 ... text-rose-700 shadow-xl ... hover:text-rose-400 rounded-lg ... 
      subpixel-antialiased ... font-medium ... text-3xl ...">
        Want to Sell your <a class="underline decoration-indigo-500">Own products???</a> Feel free to fill in the form below discribing your product and post it<a>📝</a>. Your will see your 
        product updated in the home screen 😊
      </h1>
      <div className="fit p-8 ...">
        {/* Product Form */}
        <ProductForm onAddProduct={addProduct} />
      </div>
      <div class='p-8 ...' >
        {/* Image Upload */}
        <Upload onImageUpload={handleImageUpload} />
      </div>

      <div class= "bg-red-300 rounded-lg ... border-solid border-8 border-rose-500 ...  ">
        <h5 class="p-8 ... font-medium ... text-2xl ... hover:underline decoration-indigo-500 text-rose-700 
        subpixel-antialiased ...">Your Products</h5>
        {/* Display Products */}
        <ProductsContainer products={products} imageUrls={imageUrls} setProducts={setProducts} onDeleteProduct={handleDeleteProduct} />
      </div>
    </div>
  );
}

export default Sell;
