import React from "react";
import Header from "./components/Header/Header";
import Feature from "./components/Feature/Feature";
import MensProducts from "./components/Products/MensProducts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleProduct from "./components/Products/Product";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="" element={<Feature />}></Route>
          <Route path="feature" element={<div>hello</div>}></Route>
          <Route path="womens" element={"help"}></Route>
          <Route path="cart" element={<Cart />}></Route>
          <Route path="mens">
            <Route path="" index element={<MensProducts />} />
            <Route path=":id" element={<SingleProduct />} />
          </Route>
          <Route path="/unisex" element={<div>unisex</div>}></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
