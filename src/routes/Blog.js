import React, { useState, useContext } from "react";
import { CartContext } from "../routes/CartContext.js";
import MealTransparent from "../Assets/Meal-Transparent-Images.png";
import ChooseMeals from "../Assets/home-banner-image.png";
import DeliveryMeals from "../Assets/about-background-image.png";
import { AiFillStar } from "react-icons/ai";

const Blog = () => {
    const { addToCart } = useContext(CartContext);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogInfoData = [
    {
      image: MealTransparent,
      title: "Kentucky Meals",
      text: "$45.2",
    },
    {
      image: ChooseMeals,
      title: "Tasty Dish",
      text: "$33.9",
    },
    {
      image: DeliveryMeals,
      title: "Vegetarian Greens",
      text: "$60.0",
    },
  ];

  return (
    <div className="blog-section-wrapper" id="blog" data-aos="fade-up">
      <div className="blog-section-top">
        <h1 className="primary-subheading">Our Blogs</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Eos voluptatibus provident et laborum eum consectetur?
        </p>
      </div>
      <div className="blog-section-bottom">
        {blogInfoData.map((data, index) => (
          <div key={index} className="blog-section-info">
            <div className="blog-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h3>{data.title}</h3>
            <p>{data.text}</p>
            <button
              className="secondary-button"
              onClick={() => setSelectedBlog(data)}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBlog && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setSelectedBlog(null)}>
              &times;
            </span>
            <img src={selectedBlog.image} alt="" />
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.text}</p>
            <button
              className="secondary-button"
              onClick={() => {
                addToCart(selectedBlog);
                setSelectedBlog(null); // close modal after adding
              }}
            >
              Confirm Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
