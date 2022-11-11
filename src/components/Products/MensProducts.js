import "./Products.css";
import stocklist from "../MensStock.json";
//import SearchMenu from "./SearchMenu";

import { useNavigate } from "react-router-dom";

const MensProducts = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="section-description">
        <p>
          Footware plays an essential role in every outfit. After all, the right
          footwear can quickly make or break your look. So, if you want to
          appear stylish, it’s important to have the right shoes on hand to
          complete and complement your every ensemble. Luckily, we have you and
          your feet covered. From running errands to attending a formal gala,
          we’ve narrowed down a selection of stylish men’s footware at every man
          should have in his wardrobe.
        </p>
      </div>

      <div className="single-product-container">
        {stocklist.map((stock) => {
          return (
            <div
              className="single-product-details"
              key={stock.id}
              onClick={() => navigate(stock.id, { state: stock })}
            >
              <img
                title={stock.name} // add to json an alt - mention this in the demo
                src={stock.image}
                alt="product image"
              />
              <div className="product-details">
                <p>{stock.name}</p>
                <p>{stock.miniDescription}</p>
                <p>{`£${stock.price}`}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MensProducts;
