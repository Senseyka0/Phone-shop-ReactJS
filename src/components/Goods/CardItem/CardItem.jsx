import React from "react";
import { NavLink } from "react-router-dom";

import "./CardItem.scss";

const CardItem = ({ cardItem }) => {
  return (
    <NavLink to={`/products/${cardItem.name}`} key={cardItem.id} className="cardItem">
      <img src={cardItem.img[0].url} alt="Apple img" />
      <p className="cardItem__name">{cardItem.name}</p>
      <p className="cardItem__price">{cardItem.price}$</p>
    </NavLink>
  );
};

export default CardItem;
