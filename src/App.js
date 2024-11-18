//
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
//
import { ToastContainer } from "react-toastify";
//Routing
import { Route, Routes } from "react-router-dom";
//Styles
import "./App.css";
//Import Components
import CheckoutForm from "./Pages/CheckoutForm";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import InterfaceOne from "./Pages/InterfaceOne";

const stripePromise = loadStripe(
  "pk_test_51MwPQuSBD8MtMZAoDOk33CGs935GKRdxMeR3HN4Rro4g8HIuIPOMfDRLHoEYWPFPHIpK0RfN5Gc9zbKOhqcMzMPn00z8zgZCFw"
);
function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" element={<InterfaceOne />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/checkout"
          element={
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
