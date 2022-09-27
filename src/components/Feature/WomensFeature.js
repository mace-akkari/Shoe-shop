import { Link } from "react-router-dom";
import HomePageImages from "../../HomePageImages";

const Womens = () => {
  return (
    <div className="unisex-shoes">
      <Link to="/unisex">
        <img
          src={HomePageImages.womensLogo}
          alt="unisex shoes"
          className="unisex-shoes-logo"
        />
        <button className="feature-button">SHOP WOMENS</button>
      </Link>
    </div>
  );
};

export default Womens;
