import "./Products.css";
import stocklist from "../MensStock.json";

import { useNavigate } from "react-router-dom";

const MensProducts = () => {
  const navigate = useNavigate();

  return (
    <div>
      {stocklist.map((stock) => {
        return (
          <div
            key={stock.id}
            onClick={() => navigate(stock.id, { state: stock })}
          >
            <div>{stock.name}</div>
            <img
              src={stock.image}
              alt="product image"
              width="100"
              height="100"
            />
            <div>{stock.price}</div>
          </div>
        );
      })}
    </div>
  );
};

export default MensProducts;
