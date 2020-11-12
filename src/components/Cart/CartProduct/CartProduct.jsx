import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import "./CartProduct.scss";

function CartProduct({ product, addSum, minusSum, addTempSum, setRealSum, isLast }) {
  const [totalPriceOfProduct, seTotalPriceOfProduct] = useState(product.price);
  const [amountOfProduct, setAmountOfProduct] = useState(1);

  const setAmount = (newAmount) => {
    if (isNaN(newAmount) || newAmount <= 0) {
      setAmountOfProduct(1);
    } else {
      minusSum(product.price * amountOfProduct);
      setAmountOfProduct(+newAmount);
    }
  };

  useEffect(() => {
    seTotalPriceOfProduct(product.price * amountOfProduct);
  }, [amountOfProduct, product.price]);

  useEffect(() => {
    minusSum(totalPriceOfProduct - product.price * (amountOfProduct - 1));

    addSum(totalPriceOfProduct);
  }, [addSum, amountOfProduct, minusSum, product.price, totalPriceOfProduct]);

  useEffect(() => {
    addTempSum(totalPriceOfProduct);
    if (isLast) setRealSum();
  }, [addTempSum, isLast, setRealSum, totalPriceOfProduct]);

  return (
    <>
      <tbody>
        <tr>
          <td className="imgBody">
            <NavLink to={`/products/${product.name}`}>
              <img src={product.color} alt="Product" />
            </NavLink>
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
