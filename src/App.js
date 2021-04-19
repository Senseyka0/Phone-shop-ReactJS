import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

// import DB from "./assets/db.json";

import Footer from "./components/Footer/Footer";
import Goods from "./components/Goods/Goods";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

import ProductPage from "./components/Goods/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import "./App.scss";

const App = () => {
   const [goods, setGoods] = useState([]);
   const [isLoaded, setIsLoaded] = useState(false);

   const allGoods = isLoaded && goods.iphone.concat(goods.mac, goods.ipad);

   useEffect(() => {
      setIsLoaded(false);
      axios.get("/goods").then(({ data }) => {
         setGoods(data);
         setIsLoaded(true);
      });
   }, []);

   const [addedToCartProduct, setAddedToCartProduct] = useState([]);

   const addToCartProduct = (product) => {
      setAddedToCartProduct([...addedToCartProduct, product]);
   };

   return (
      <Router>
         <div className="App">
            <div className="container">
               <Header cartProducts={addedToCartProduct} />

               <h1 className="store">Alex's Store.</h1>

               <div className="content">
                  <Sidebar />
                  {isLoaded && (
                     <Route
                        exact
                        path="/"
                        render={() => <Goods goods={allGoods} title="All" />}
                     />
                  )}
                  <Route
                     exact
                     path="/cart"
                     render={() => <Cart cartProducts={addedToCartProduct} />}
                  />
                  {isLoaded && (
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
                  )}
                  <Route
                     path="/checkout"
                     render={() => <Checkout cartProducts={addedToCartProduct} />}
                  />
                  {isLoaded && (
                     <Route
                        exact
                        path="/iphones"
                        render={() => <Goods goods={goods.iphone} title="Iphone" />}
                     />
                  )}
                  {isLoaded && (
                     <Route
                        path="/mac"
                        render={() => <Goods goods={goods.mac} title="Mac" />}
                     />
                  )}
                  {isLoaded && (
                     <Route
                        path="/ipad"
                        render={() => <Goods goods={goods.ipad} title="Ipad" />}
                     />
                  )}
                  {isLoaded && (
                     <Route
                        path="/watch"
                        render={() => <Goods goods={goods.watch} title="Watch" />}
                     />
                  )}
                  {isLoaded && (
                     <Route
                        path="/accessories"
                        render={() => <Goods goods={goods.accessories} title="Accessories" />}
                     />
                  )}
               </div>
               <Footer />
            </div>
         </div>
      </Router>
   );
};

export default App;
