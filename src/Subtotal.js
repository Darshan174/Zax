import React from 'react';
import { useNavigate } from "react-router-dom";
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import './Subtotal.css';


function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  

  return (
    <div style={{ position: "absolute", left: "900px" }}>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({basket.length} items):
                <strong>{value}</strong>
              </p>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(basket)}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />

        <button
          type="button"
          className="bg-gradient-to-r from-green-100 to-blue-200 hover:from-pink-100 hover:to-yellow-100 
        font-semibold hover:text-black py-2 px-4  hover:border-transparent rounded-lg ..."
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Subtotal;
