// import React, { useEffect } from "react";
// import { useStateValue } from "./StateProvider";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import CheckoutProduct  from './CheckoutProduct'
// import './Payment.css'
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
// import { getBasketTotal } from './reducer'
// import  CurrencyFormat from 'react-currency-format';
// import axios from 'axios';

// function Payment() {
//   const [{ basket, user }, dispatch] = useStateValue();
//   const navigate = useNavigate();

//   const stripe = useStripe();
//   const elements = useElements();

//   const [succeeded, setSucceeded] = useState(false);
//   const [processing, setProcessing] = useState("");
//   const [error, setError] = useState(null);
//   const [disabled, setDisabled] = useState(true);
//   const [clientSecret, setClientSecret] = useState(true);

//   useEffect(() => {
//     //gen the special stripe secret which allows us to charge a customer
//     const getClientSecret = async () => {
//       const response = await axios({
//         method: 'post',
//         //Stripe expects the total in a currencies subunits
//         url: `/payments/create?total=${getBasketTotal(basket) * 100}`
//       });
//       setClientSecret(response.data.clientSecret)
//   }

//     getClientSecret();
//   }, [basket]);
//   console.log('THE SECRET IS >>>', clientSecret)

//   //imp snippet end
//   const handleSubmit = async (event) => {
//     //do all the fancy stripe stuff...
//     event.preventDefault();
//     setProcessing(true);

//     const payload = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: elements.getElement(CardElement)
//       }
//     }).then(({ paymentIntent }) => {
//       //paymentInetent = payment confirmation

//       setSucceeded(true);
//       setError(null)
//       setProcessing(false)

//       navigate.replace('/orders')
//     })
//   }
//   const handleChange = event => {
//     //Listen for changes in the CardElement
//     //and display an errors as the customer types their card details
//     setDisabled(event.empty);
//     setError(event.error ? event.error.message : "")

//   }

//   return (
//     <div className="payment">
//       <div className="payment__container">
//         <h1>Checkout(<Link tp="/checkout">items</Link>)</h1>
//         {/*Payment Section - delivery address */}
//         <div className="payment__section">
//           <div className="payment__title">
//             <h3>Delivery Address</h3>
//           </div>
//           <div className="payment__address">
//             <p>Adress</p>
//             <p>Adress</p>
//         </div>
//         </div>

//         {/* Payment section - Review Items */}
//         <div className="payment__section">
//         <div className="payment__title">
//             <div className="payment__items">
//         {basket.map(item => (
//           <CheckoutProduct
//           id={item.id}
//           item={item.title}
//           image={item.image}
//           price={item.price}
//           rating={item.rating}
//           />
//           ))}
//            <h3>Payment Method</h3>

//       </div>

//       </div>
//       <div className="payment details">
//         {/* Stripe magic */}
//         <form onSubmit={handleSubmit}>
//           <CardElement onChange={handleChange}/>
//           <div className="payment__priceContainer">
//             <CurrencyFormat
//             rendertext={(value) => <h3> order total: {value}</h3>}
//             decimalScale={2}
//             value={getBasketTotal(basket)}
//             displayType={"text"}
//             thousandSeparator={true}
//             prefix={"$"}
//             />
//             <button disabled={processing || disabled || succeeded}>
//               <span>{processing ? <p>Processing</p> : "Buy now"}</span>
//               </button>
//               </div>
//               {/* Errors */}
//               {error && <div>{error}</div>}
//         </form>

//       </div>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Payment;

//const stripe = require("stripe")("sk_test_51MaNiLSERVek0tdZUoZMexx43VbJBUYjMJfCNooUBYo2pEnxel0AxdCW3sQFydhybq91JKMPJxnNxow9kZVW2nRt00hS1KHr1u");
// import { useEffect, useState } from 'react'
// import { loadStripe } from '@stripe/stripe-js'


// function Payment(props)  {
//   const [stripePromise, setStripePromise] = useState(null);

//   useEffect(() => {
    
//   })
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Payment

// import { useEffect, useState } from "react";
// import axios from 'axios';
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";
// import { loadStripe } from "@stripe/stripe-js";

// const promise = loadStripe(
//   "pk_test_51MaNiLSERVek0tdZg0A7fe3SeCAnBy2fMa1hKx5q65SxewjC8BMWcmFYWKLEDdjKcyYFHVYFWy60Lnz5DoiCjQ5n006lsjwOM6"
// )


// const Checkout = () => {
//   const [clientSecret, setClientSecret] = useState('');

//   useEffect(() => {
//     const fetchClientSecret = async () => {
//       const response = await axios.post('/create-payment-intent');
//       setClientSecret(response.data.clientSecret);
//     };

//     fetchClientSecret();
//   }, []);
// }



// function Payment() {
//   const [stripePromise, setStripePromise] = useState(null);
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     fetch("/config").then(async (r) => {
//       const { publishableKey } = await r.json();
//       setStripePromise(loadStripe(publishableKey));
//     });
//   }, []);

//   useEffect(() => {
//     fetch("/create-payment-intent", {
//       method: "POST",
//       body: JSON.stringify({}),
//     }).then(async (result) => {
//       var { clientSecret } = await result.json();
//       setClientSecret(clientSecret);
//     });
//   }, []);

//   return (
//     <>
//       <h1>React Stripe and the Payment Element</h1>
//       {clientSecret && stripePromise && (
//         <Elements stripe={stripePromise} >
//           <CheckoutForm clientSecret={{ clientSecret }} />
//         </Elements>
//       )}
//     </>
//   );
// }

// export default Payment;

// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";


// import "./App.css";

// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // This is your test publishable API key.
// const stripePromise = loadStripe("pk_test_51MaNiLSERVek0tdZg0A7fe3SeCAnBy2fMa1hKx5q65SxewjC8BMWcmFYWKLEDdjKcyYFHVYFWy60Lnz5DoiCjQ5n006lsjwOM6");

// export default function App() {
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     fetch("/create-payment-intent", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
//     })
//       .then((res) => res.json())
//       .then((data) => setClientSecret(data.clientSecret));
//   }, []);

//   const appearance = {
//     theme: 'stripe',
//   };
//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div className="App">
//       {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       )}
//     </div>
//   );
// }