import react from "react";
// import Navbar  from "./Navbar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar/> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="BannerBackground" />
        </div>
        <div className="home-text-section" data-aos="fade-up">
          <h1 className="primary-heading">
            Your Favourite Food Delievered Hot & Fresh
          </h1>
          <p className="primary-text" data-aos="fade-up">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p>
          <button className="secondary-button" data-aos="fade-up">
            <Link
              to="/orderblog"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Order Now <FiArrowRight />
            </Link>
          </button>
        </div>
        <div className="home-image-container" data-aos="fade-up">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
