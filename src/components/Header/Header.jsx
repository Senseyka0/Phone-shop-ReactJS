import React from "react";

import CartBlock from "./CartBlock/CartBlock";

import "./Header.scss";
import SearchBlock from "./SearchBlock/SearchBlock";

function Header(props) {
  return (
    <div className="header">
      <SearchBlock />
      <CartBlock cartProducts={props.cartProducts} />
    </div>
  );
}

export default Header;
