import React from "react";
//import { useStateValue } from "./StateProvider";
import './Product.css'


function Product({ id, title, image, price, rating }) {
  // const [{ basket }, dispatch] = useStateValue();

  //const addToBasket = () => {
    //dispatch the item into the datat layer
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       id: id,
  //       title: title,
  //       image: image,
  //       price: price,
  //       rating: rating,
  //     },
  //   });
  // };
  return (
    <div className="product">
      <div className="product__info">
        <p>Iphone 15 pro max</p>
        <p className="product__price">
          <medium>$</medium>
          <strong>1499</strong>
        </p>
        <div className="product__rating">
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
              <p>⭐</p>
        </div>
      </div>
      <img src="https://www.zdnet.com/a/img/resize/7c135e7748ad80aa72743c58c1d067ba1a0fddcf/2023/10/06/4e7663f4-fe43-424e-8fde-64a5612cdfd7/img-1950.jpg?auto=webp&width=1280"
      alt="" />


    </div>
  );
}

export default Product;
