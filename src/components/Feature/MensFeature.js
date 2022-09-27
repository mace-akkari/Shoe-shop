import { Link } from "react-router-dom";
import HomePageImages from "../../HomePageImages";

const Mens = () => {
  return (
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
  );
};

export default Mens;
