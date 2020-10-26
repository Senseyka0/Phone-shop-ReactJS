import React, { useEffect, useRef, useState } from "react";

import "./CartProduct.scss";

function CartProduct({ product, changeSum, change }) {
  const [totalPriceOfProduct, seTotalPriceOfProduct] = useState(product.price);
  const [amountOfProduct, setAmountOfProduct] = useState(1);

  const setAmount = (newAmount) => {
    if (isNaN(newAmount) || newAmount <= 0) {
      setAmountOfProduct(1);
    } else {
      change(product.price * amountOfProduct);
      setAmountOfProduct(+newAmount);
      // // seTotalPriceOfProduct(+product.price * +newAmount);

      // if (totalPriceOfProduct > 0) {
      //   change(+product.price * +(newAmount - 1));
      // }
      // changeSum(+product.price * +newAmount);
    }
  };

  useEffect(() => {
    seTotalPriceOfProduct(product.price * amountOfProduct);
  }, [amountOfProduct]);

  const firstTime = useRef(true);

  useEffect(() => {
    if (firstTime.current) {
      firstTime.current = false;
    } else {
      change(totalPriceOfProduct - product.price * (amountOfProduct - 1));
      changeSum(totalPriceOfProduct);
    }
  }, [totalPriceOfProduct]);

  useEffect(() => {
    changeSum(totalPriceOfProduct);
  }, []);

  return (
    <>
      <tbody>
        <tr>
          <td className="imgBody">
            <img src={product.color} alt="Product" />
          </td>
          <td className="infoBody">
            <h4>{product.name}</h4>
            <p>Color: {product.colorName}</p>
            <p>Capacity: {product.capacity} GB</p>
          </td>
          <td className="priceBody">{product.price} $</td>
          <td className="quantityBody">
            <input
              type="number"
              onChange={(e) => setAmount(e.target.value)}
              value={amountOfProduct}
            />
          </td>
          <td className="totalBody">{totalPriceOfProduct} $</td>
        </tr>
      </tbody>
    </>
  );
}

export default CartProduct;
