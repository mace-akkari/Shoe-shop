import { Link } from "react-router-dom";
import HomePageImages from "../../HomePageImages";

const Unisex = () => {
  return (
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
  );
};

export default Unisex;
