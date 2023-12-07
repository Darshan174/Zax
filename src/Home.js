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
              title="Play Station 5"
              price={499}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNCy1pos1ugElPqT0xYOvSaqsQYJcs0ky_ModIPU7KM3wlvK7xnDzof2jQQArbN0aZB-c&usqp=CAU"
              rating={4}
            />
            <Product
              id={12343431}
              title="Iphone 15 pro max"
              price={1599}
              image="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-pro-max-1.jpg"
              rating={5}
            />
            <Product
              id={12343431}
              title="Sony WH-1000XM5"
              price={349}
              image="https://futureaudiophile.com/wp-content/uploads/2022/09/1.5-Sony-WH-1000XM5-White.jpg"
              rating={4}
            />
            <Product
              id={12343431}
              title="Samsung S23"
              price={400}
              image="https://www.pointekonline.com/wp-content/uploads/2023/02/samsung-s23-img.png"
              rating={4}
            />
          </div>

          <div className="home__row">
            <Product
              id={12343431}
              title="Mechanical Keyboard"
              price={129}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIuyc6qJYfsXNm5ET2gFVj0SNHo4N1VngicQ&usqp=CAU"
              rating={3}
            />
            <Product
              id={12343431}
              title="Airpods Pro"
              price={299}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKWvH3xXkkQHRFxuYiyumBKrMO1NYkkUDBg&usqp=CAU"
              rating={5}
            />
            <Product
              id={12343431}
              title="Macbook Pro"
              price={349}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLR2ARz7csEFxXzJCv88cdSbcmll5D2spurtVWp0Gw44F6QGfi7eQnEmaZRD4EWwX41ao&usqp=CAU"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id={12343431}
              title="Samsung 4k TV"
              price={499}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQmHXS5-ORKPjR8gE5VOk0IhZZpI33jfTZFQ&usqp=CAU"
              rating={3}
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
