import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper" data-aos="fade-up">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What They Are Saying</h1>
        <p className="primary-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
          consequatur sunt hic, esse cum facere?
        </p>
      </div>
      <div className="testimonial-rows">
        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum
            quam dolorem veritatis obcaecati sunt.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>

        <div className="testimonial-section-bottom">
          <img src={ProfilePic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum
            quam dolorem veritatis obcaecati sunt.
          </p>
          <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
