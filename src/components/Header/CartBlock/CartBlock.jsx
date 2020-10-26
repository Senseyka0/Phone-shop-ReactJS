import React from "react";

import { AiOutlineShoppingCart } from "react-icons/all";
import { NavLink } from "react-router-dom";

import "./CartBlock.scss";

function CartBlock(props) {
  return (
    <NavLink to="/cart" className="header-cartBlock">
      <AiOutlineShoppingCart />
      <p>
        Cart <span>({props.cartProducts.length})</span>
      </p>
    </NavLink>
  );
}

export default CartBlock;
