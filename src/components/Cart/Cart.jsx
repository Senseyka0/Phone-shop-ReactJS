import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import CartProduct from "./CartProduct/CartProduct";

import "./Cart.scss";

function Cart(props) {
  const [subtotalSum, setSubtotalSum] = useState(0);

  let sum = 0;

  const addSum = (value) => {
    setSubtotalSum(value + subtotalSum);
  };

  const minusSum = (value) => {
    setSubtotalSum(subtotalSum - value);
  };

  const setRealSum = () => {
    setSubtotalSum(sum);
  };

  const addTempSum = (value) => {
    sum += value;
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
            {props.cartProducts.map((product, index) => {
              return (
                <CartProduct
                  key={product.name}
                  product={product}
                  addSum={addSum}
                  minusSum={minusSum}
                  isLast={index === props.cartProducts.length - 1}
                  setRealSum={setRealSum}
                  addTempSum={addTempSum}
                />
              );
            })}
          </table>
          <div className="cart-table-subtotal">
            <h4>
              Subtotal <span>{subtotalSum} $</span>
            </h4>
            <p>Taxes and shipping calculated at checkout</p>
            <div className="buttons">
              <NavLink to="/" className="continue">
                Continue Shopping
              </NavLink>
              <NavLink to={`/checkout/information`} className="checkOut">
                Check Out
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
