import React from "react";
import { useStateValue } from "./StateProvider";
import './CheckoutProduct.css';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    //remove the item from the basket
  };
  return (

    <div className="checkoutProduct">
      <img  className="checkoutProduct__image" src={image} />
       
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button type="button"  class="bg-gradient-to-r from-green-100 to-blue-200 hover:from-pink-100 hover:to-yellow-100 font-semibold hover:text-black py-2 px-4  hover:border-transparent rounded-lg ... my-8 ..." onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
