import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import CartProduct from "./CartProduct/CartProduct";

import "./Cart.scss";

function Cart(props) {
  const [maxSum, setMaxSum] = useState(0);

  const changeSum = (value) => {
    // debugger;
    setMaxSum(value + maxSum);
    console.log(value);
  };

  const change = (value) => {
    // debugger;
    setMaxSum(maxSum - value);
  };
  return (
    <div className="cart">
      {props.cartProducts.length === 0 ? (
        <h3>Your cart is currently empty</h3>
      ) : (
        <div className="cart-table">
          <table>
            <thead>
              <tr>
                <th className="imgHead">Product</th>
                <th className="infoHead"></th>
                <th className="priceHead">Price</th>
                <th className="quantityHead">Quantity</th>
                <th className="totalHead">Total</th>
              </tr>
            </thead>
            {props.cartProducts.map((product) => {
              return (
                <CartProduct
                  key={product.name}
                  product={product}
                  changeSum={changeSum}
                  change={change}
                />
              );
            })}
          </table>
          <div className="cart-table-subtotal">
            <h4>
              Subtotal <span>{maxSum} $</span>
            </h4>
            <p>Taxes and shipping calculated at checkout</p>
            <div className="buttons">
              <NavLink to="/" className="continue">
                Continue Shopping
              </NavLink>
              <button className="checkOut">Check Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
