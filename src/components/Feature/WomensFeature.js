import { Link } from "react-router-dom";
import HomePageImages from "../../HomePageImages";

const Womens = () => {
  return (
    <div className="unisex-shoes">
      <Link to="/unisex">
        <img
          src={HomePageImages.WomensLogo}
          alt="unisex shoes"
          className="unisex-shoes-logo"
        />
      </Link>
    </div>
  );
};

export default Womens;
