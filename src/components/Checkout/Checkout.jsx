import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Information from "./Information/Information";

import "./Checkout.scss";

function Checkout(props) {
  return (
    <div className="checkout">
      <div className="checkout-wrapper">
        <Router>
          <Route path="/checkout/information" render={() => <Information />} />
          {/* <Route path="/checkout/shipping" render={() => <Shipping />} /> */}
        </Router>
      </div>
      <div className="checkout-products">
        {props.cartProducts.map((product) => {
          return <h3 key={product.id}>{product.name}</h3>;
        })}
      </div>
    </div>
  );
}

export default Checkout;
