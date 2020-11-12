import React, { useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import DB from "./assets/db.json";

import Footer from "./components/Footer/Footer";
import Goods from "./components/Goods/Goods";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import ProductPage from "./components/Goods/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";

import "./App.scss";
import Checkout from "./components/Checkout/Checkout";

const App = () => {
  const allGoods = DB.goods.iphone.concat(DB.goods.mac, DB.goods.ipad);

  const [addedToCartProduct, setAddedToCartProduct] = useState([]);

  const addToCartProduct = (product) => {
    setAddedToCartProduct([...addedToCartProduct, product]);
  };
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header cartProducts={addedToCartProduct} />

          <h1 className="store">Senseyka's Store.</h1>

          <div className="content">
            <Sidebar />
            <Route exact path="/" render={() => <Goods goods={allGoods} title="All" />} />
            <Route
              exact
              path="/cart"
              render={() => <Cart cartProducts={addedToCartProduct} />}
            />
            <Route
              exact
              path={`/products/:productName?`}
              render={(e) => (
                <ProductPage
                  route={e}
                  goods={allGoods}
                  addedToCartProduct={addedToCartProduct}
                  addToCartProduct={addToCartProduct}
                />
              )}
            />
            <Route
              path="/checkout"
              render={() => <Checkout cartProducts={addedToCartProduct} />}
            />

            <Route
              exact
              path="/iphones"
              render={() => <Goods goods={DB.goods.iphone} title="Iphone" />}
            />
            <Route
              path="/mac"
              render={() => <Goods goods={DB.goods.mac} title="Mac" />}
            />
            <Route
              path="/ipad"
              render={() => <Goods goods={DB.goods.ipad} title="Ipad" />}
            />
            <Route
              path="/watch"
              render={() => <Goods goods={DB.goods.watch} title="Watch" />}
            />
            <Route
              path="/accessories"
              render={() => <Goods goods={DB.goods.accessories} title="Accessories" />}
            />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
