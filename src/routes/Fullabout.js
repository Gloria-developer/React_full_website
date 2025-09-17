import React from 'react';
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";

export const Fullabout = () => {
  return (
    <div className="about-section-container" data-aos="fade-up">
        <div className="about-background-image-container">
            <img src={AboutBackground} alt=''/>
        </div> 
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt=''/>
        </div> 
        <div className="About-section-text-container">
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food Is In Important Part of A Balanced Diet
            </h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Neque aut non perspiciatis voluptatem nam eligendi.
            </p>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Neque aut non perspiciatis voluptatem nam eligendi.
            </p>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dignissimos ab id cumque quibusdam temporibus veritatis delectus
                 rerum inventore minima commodi? Illo dolorum nam officiis et iusto iure
            </p>
            <div className="about-buttons-container">
                            <button className='secondary-button'>Contact Us</button>
                        </div>
        </div>     
    </div>
  );
};

export default Fullabout;