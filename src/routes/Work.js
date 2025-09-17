import React from 'react';
import { useLocation } from 'react-router-dom'; // to check current route
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const location = useLocation(); // tells us the current URL

  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Its always there very day of the week and with a warm test. so endever to get your enjoyable meals.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Its always there very day of the week and with a warm test. so endever to get your enjoyable meals.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Its always there very day of the week and with a warm test. so endever to get your enjoyable meals.",
    },
  ];

  return (
    <div className='work-section-wrapper'data-aos="fade-up">
      <div className="work-section-top">
        <p className='primary-section-subheading'>Work</p>
        <h1 className='primary-subheading'>How It Works</h1>
        <p className='primary-text'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Eos voluptatibus provident et laborum eum consectetur?
        </p>
      </div>

      <div className="work-section-bottom">
        {workInfoData.map((data, index) => (
          <div className="work-section-info" key={index}>
            {/* <div className="work-section-info" data-aos="flip-left" key={index}> */}
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>

            {/* EXTRA INFO ONLY when on /work route */}
            {location.pathname === "/work" && (
              <>
                <p className="extra-text">
                  More details about {data.title}. This appears only on the Work page, 
                  not on the homepage.
                </p>
                <button className="info-btn">Learn More</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
