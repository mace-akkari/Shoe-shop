import React from "react";
import Header from "./components/Header/Header";
import Feature from "./components/Feature/Feature";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Feature />}></Route>
          <Route path="/feature" element={<div>feature</div>}></Route>
          <Route path="/womens" element={<div>womens</div>}></Route>
          <Route path="/mens" element={<div>mens</div>}></Route>
          <Route path="/unisex" element={<div>unisex</div>}></Route>
        </Routes>
        {/* <Footer />  build last*/}
      </Router>
    </div>
  );
};

export default App;
