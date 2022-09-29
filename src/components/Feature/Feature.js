import { Link } from "react-router-dom";
import "./Feature.css";

import HomePageImages from "../../HomePageImages";

const Feature = () => {
  return (
    <div>
      <div className="feature">
        <Link to="/feature">
          <img
            src={HomePageImages.Feature}
            alt="main feature"
            className="feature-logo"
          />
          <button className="feature-button">SHOP THE FEATURE</button>
        </Link>
      </div>
      <div className="womens-shoes">
        <Link to="/womens">
          <img
            src={HomePageImages.WomensLogo}
            alt="womens shoes"
            className="womens-shoes-logo"
          />
          <button className="feature-button">SHOP WOMENS</button>
        </Link>
      </div>
      <div className="mens-shoes">
        <Link to="/mens">
          <img
            src={HomePageImages.MensLogo}
            alt="mens shoes"
            className="mens-shoes-logo"
          />
          <button className="feature-button">SHOP MENS</button>
        </Link>
      </div>
      <div className="unisex-shoes">
        <Link to="/unisex">
          <img
            src={HomePageImages.UnisexLogo}
            alt="unisex shoes"
            className="unisex-shoes-logo"
          />
          <button className="feature-button">SHOP UNISEX</button>
        </Link>
      </div>
    </div>
  );
};

export default Feature;
