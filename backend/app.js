

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51HQz8aIzzETFhGbQy3Fila0tRuTKpcTniOkXi9alo4GPJf8qvCTMpRUe6p9sSPpE2eRsRCclfjXedEpW9KZBCxIr00GJtar5h7");

const PORT = process.env.PORT || 8080; // Step 1
// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/hi", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved for this amount >>> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "inr",
        payment_method_types: ['card'],
        metadata: {
            order_id: '6735',
        },
    })


    // OK - Created
    console.log(paymentIntent)
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});


app.listen(PORT, console.log(`Server is starting at ${PORT}`));

// - Listen command to cloud


// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api