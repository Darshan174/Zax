// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const {response, request} = require("express");
// const stripe = require("stripe")("sk_test_51MaNiLSERVek0tdZUoZMexx43VbJBUYjMJfCNooUBYo2pEnxel0AxdCW3sQFydhybq91JKMPJxnNxow9kZVW2nRt00hS1KHr1u");

// // API

// // App config
// const app = express();

// // Middlewares
// app.use(cors({origin: true}));
// app.use(express.json());

// // API routes

// app.get("/", (request, response) => response.status(200).send("Hello world"));

// app.post(
//     "/payments/create",
//     async (request, response) => {
//       const total = request.query.total;

//       console.log("Payment Request Recieved BOOM!! for this amount >>>", total);
//       const paymentIntent = await stripe.paymentIntents.create({
//         amount: total, // subunits of the currency
//         currency: "usd",
//       });

//       // OK - Created
//       response.status(201).send({
//         clientSecret: paymentIntent.client_secret,
//       });
//     },
// );

// // Listen command

// exports.api = functions.https.onRequest(app);

// // Example endpoint

// // http://127.0.0.1:5001/zaxecommerce/us-central1/api
