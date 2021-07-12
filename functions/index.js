const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const { response } = require("express");
//const stripe = require('stripe')
//('sk_test_51JAnPYSBfJadLyvh5FxxWDbkQd3kcgUQG93PsYWAjEyuEga0rX8tps7REGxvWtc7VPUwZwfGCEEgVk4Pt47Dafuw00zrHvVfpt');
const stripe = require("stripe")(
    "sk_test_51HPvU9DFg5koCdLGeOEiFvwHat4v8eMjX6SY0YCwxPBQBUPhKy1fPVhiSM5cQtgW7QBG9ydQcXnW57TDxVE2f3H000HSfmEQZF"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send("Hello World"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment request recieved !! for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: 'usd',
    });

    //OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen Command
exports.api = functions.https.onRequest(app);

// Example
// http://localhost:5001/clone-2-febf6/us-central1/api