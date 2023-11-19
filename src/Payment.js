import React, { useEffect } from "react";
import { useStateValue } from "./StateProvider";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckoutProduct  from './CheckoutProduct'

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout(<Link tp="/checkout">items</Link>)</h1>
        {/*Payment Section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>Adress</p>
            <p>Adress</p>
        </div>
        </div>

        {/* Payment section - Review Items */}
        <div className="payment__section">
        <div className="payment__title">
            <h3>Payment Method</h3>
            <div className="payment__items">
        {basket.map(item => (
            <CheckoutProduct
            id={item.id}
            item={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
        />
        ))}

      </div>

      </div>
      <div className="payment details">
        {/* Stripe magic */}

      </div>
      </div>
      </div>
    </div>
  );
}

export default Payment;
