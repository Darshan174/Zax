import React, { useEffect, useState } from "react";
import "./Home.css";
import Product from "./Product";
import ProductsContainer from "./ProductsContainer";
import Carousel from "./Carousel";



function Home() {
  const [products, setProducts] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  
  
  // Load products from localStorage on component mount
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
    
    // Assuming each product has an "imageUrls" property containing the list of image URLs
    const allImageUrls = storedProducts.reduce(
      (acc, product) => [...acc, ...(product.imageUrls || [])],
      []
    );
    setImageUrls(allImageUrls);
  }, []);

  

  const handleDeleteProduct = (productId) => {
    // Filter out the product with the given productId
    const updatedProducts = products.filter((product) => product.id !== productId);

    // Update the products state and localStorage
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };


  




  
  return (
    <div class="bg-gradient-to-r from-gray-600 via-gray-200 to-gray-600 ...">
      <div className="home">
        <div className="home__container">
          <Carousel />

          <div className="home__row">
            <Product
              id={12343431}
              title="Apprenticed to a Himalayan Master"
              price={349}
              image="https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg"
              rating={5}
            />
            <Product
              id={12343431}
              title="Apprenticed to a Himalayan Master"
              price={349}
              image="https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg"
              rating={2}
            />
            <Product
              id={12343431}
              title="Apprenticed to a Himalayan Master"
              price={349}
              image="https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg"
              rating={4}
            />
            <Product
              id={12343431}
              title="Apprenticed to a Himalayan Master"
              price={349}
              image="https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id={12343431}
              title="Apprenticed to a Himalayan Master"
              price={349}
              image="https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg"
              rating={4}
            />
            <Product
              id={12343431}
              title="Apprenticed to a Himalayan Master"
              price={349}
              image="https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg"
              rating={4}
            />
            <Product
              id={12343431}
              title="Apprenticed to a Himalayan Master"
              price={349}
              image="https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id={12343431}
              title="Apprenticed to a Himalayan Master"
              price={349}
              image="https://satsang-foundation.org/wp-content/uploads/2022/06/Buy-Sri-Ms-Apprenticed-to-a-Himalayan-Master.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">

            <ProductsContainer
              products={products}
              imageUrls={imageUrls}
              setProducts={setProducts}
              onDeleteProduct={handleDeleteProduct}

            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
