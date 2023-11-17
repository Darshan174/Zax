import React, { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import Upload from "./Upload";
import "./Sell.css";
import ProductsContainer from "./ProductsContainer";

function Sell() {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(storedProducts);
  }, []);

  const addProduct = (product) => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    
    // Save updated products to localStorage
    localStorage.setItem('products', JSON.stringify(updatedProducts));
};


  const handleImageUpload = (urls) => {
    setImageUrls(urls);
  };

  return (
    <div className="home__container">
      {/* Product Form */}
      <ProductForm onAddProduct={addProduct} />
      {/* Image Upload */}
      <Upload onImageUpload={handleImageUpload} />

      {/* Display Products */}

      <div classname="urproducts">
        <h5>Your products</h5>
      </div>
      <ProductsContainer products={products} imageUrls={imageUrls} />
    </div>
  );
}

export default Sell;
