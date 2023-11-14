import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct  from "./CheckoutProduct";
import  "./Checkout.css";
import Subtotal from './Subtotal'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div class="bg-gradient-to-r from-indigo-100 from-10% via-sky-100 via-30% to-emerald-100 to-90% ...">
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h3>Hello, </h3>
          <h2 className="checkout__title"> Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className='check__right'>
        <Subtotal />
      </div>
    </div>
    </div>
  );
}

export default Checkout;
