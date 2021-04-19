import React from "react";
import CardItem from "./CardItem/CardItem";

import "./Goods.scss";

function Goods({ goods, title }) {
   return (
      <div className="goods">
         <h1 className="goods__title">{title}</h1>
         <div className="goods-items">
            {goods !== undefined &&
               goods.map((card) => {
                  return <CardItem key={card.name} cardItem={card} />;
               })}
         </div>
      </div>
   );
}

export default Goods;
