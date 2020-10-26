import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./ProductPage.scss";

function ProductPage(props) {
  const selectProduct = props.goods.filter((product) => {
    return product.name === props.route.match.params.productName;
  })[0];

  const [activeCapacity, setActiveCapacity] = useState(selectProduct.capacity[0]);
  const [activeColor, setActiveColor] = useState(selectProduct.img[0]);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const changeActiveCapacity = (selectedCapacity) => {
    setActiveCapacity(selectedCapacity);
  };
  const changeActiveColor = (selectedColor) => {
    setActiveColor(selectedColor);
  };

  const addToCart = () => {
    setIsAddedToCart(true);
    let newProduct = {
      id: selectProduct.id,
      name: selectProduct.name,
      price: selectProduct.price,
      color: activeColor.url,
      colorName: activeColor.name,
      capacity: activeCapacity,
    };

    props.addToCartProduct(newProduct);
  };

  return (
    <div className="product">
      <div className="product-wrapper">
        <div className="product-imgBlock">
          {selectProduct.img.map((img) => (
            <img key={img.url} src={img.url} alt="Product img" />
          ))}
        </div>
        <div className="product-infoBlock">
          <h2>{selectProduct.name}</h2>
          <p className="price">{selectProduct.price} $</p>

          <div className="product-infoBlock__capacity">
            <h3>Choose your capacity</h3>
            {selectProduct.capacity.map((memory) => (
              <p
                key={memory}
                className={memory === activeCapacity ? "activeCapacity" : ""}
                onClick={() => changeActiveCapacity(memory)}
              >
                {memory}
              </p>
            ))}
          </div>
          <div className="product-infoBlock__colors">
            <h3>Choose your color</h3>
            {selectProduct.img.map((color) => {
              return (
                <img
                  key={color.url}
                  className={color.url === activeColor.url ? "activeColor" : ""}
                  onClick={() => changeActiveColor(color)}
                  src={color.url}
                  alt="Product img"
                />
              );
            })}
          </div>
          <div className="product-infoBlock__buttons">
            {isAddedToCart ? (
              <NavLink to="/cart" className="view">
                View cart
              </NavLink>
            ) : (
              <button className="cart" onClick={addToCart}>
                Add to cart
              </button>
            )}
            {isAddedToCart && <span>Product added to cart!</span>}
            <button className="buy">Buy it now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
