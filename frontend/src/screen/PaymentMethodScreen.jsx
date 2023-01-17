import React, { useState, useContext, useEffect } from "react";
import CheckoutWizard from "../components/CheckoutWizard";
import { Store } from "../Store";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || "PayPal"
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: "SAVE_PAYMENT_METHOD", payload: paymentMethodName });
    localStorage.setItem("paymentMethod", paymentMethodName);
    navigate("/placeorder");
  };
  return (
    <div>
      <Helmet>
        <title>Payment Method</title>
      </Helmet>
      <CheckoutWizard activeStep={2} step1 step2 step3></CheckoutWizard>
      <h1 className="mb-4 text-xl text-center">Payment Method</h1>
      <div className=" my-auto ">
        <form
          className="mx-auto max-w-screen-md w-[80%] text-center"
          onSubmit={submitHandler}
        >
          {/* {["PayPal", "Stripe", "CashOnDelivery"].map((payment) => ( */}
          <div className="mb-4">
            <input
              type="radio"
              label="PayPal"
              value="Paypal"
              checked={paymentMethodName === "PayPal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="p-2"> Paypal</label>
          </div>
          <div className="mb-4 ">
            <input
              type="radio"
              label="Stripe"
              value="Stripe"
              checked={paymentMethodName === "Stripe"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="p-2"> Stripe</label>
          </div>
          <div className="mb-4 ml-[4.5rem] ">
            <input
              type="radio"
              label="CashOnDelivery"
              value="CashOnDelivery"
              checked={paymentMethodName === "CashOnDelivery"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <label className="p-2"> CashOnDelivery</label>
          </div>

          <div className="mb-4 flex justify-between w-2/4 mx-auto">
            <button
              onClick={() => navigate("/shipping")}
              type="button"
              className="bg-orange-500 border-none hover:bg-orange-600"
            >
              Back
            </button>
            <button className="bg-orange-500 border-none hover:bg-orange-600">
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
