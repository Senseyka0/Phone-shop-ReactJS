import React from "react";
import CardItem from "./CardItem/CardItem";

import "./Goods.scss";

function Goods(props) {
  return (
    <div className="goods">
      <h1 className="goods__title">{props.title}</h1>
      <div className="goods-items">
        {props.goods !== undefined &&
          props.goods.map((card) => {
            return <CardItem key={card.name} cardItem={card} />;
          })}
      </div>
    </div>
  );
}

export default Goods;
