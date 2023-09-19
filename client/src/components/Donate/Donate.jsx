import React, { useState } from "react";
// import Stripe from "@stripe/stripe-react-native";
import "./donate.css";

const Donation = () => {
  const [amount, setAmount] = useState(1000);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const stripe = new Stripe("YOUR_STRIPE_PUBLIC_KEY");

    const paymentIntent = await stripe.createPaymentIntent({
      amount,
      currency: "USD",
      description: "Donation",
    });

    const paymentResult = await stripe.confirmPaymentIntent(paymentIntent.id);

    if (paymentResult.status === "succeeded") {
      // Payment successful!
    } else {
      // Payment failed
    }
  };

  return (
    <div className="footer">
      <div className="top">
        <a href="/"><i className="fas fa-home"></i></a>
        <h1>Donation Page</h1>
      </div>

      <div className="bottom">
        <div>
          <h4>Make a donation</h4>
          <p>Your donation will help us continue to provide important services to the community.</p>
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="amount" value={amount} />
            <input type="hidden" name="currency" value="USD" />
            <input type="hidden" name="description" value="Donation" />
            <button type="submit">Donate Now</button>
          </form>
        </div>

        <div>
          <h4>Learn more</h4>
          <a href="/about">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Donation;
