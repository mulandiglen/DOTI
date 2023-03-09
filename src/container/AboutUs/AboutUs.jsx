import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At DINGA CAR RENTAL, we strive to offer the best car rental experience possible. We have been in the car rental business for over 10 years, and our mission is to provide our customers with the best service, selection, aeets your needs and your budget. Our staff is friendly and knowledgeable and always ready to help you find the perfect car for your needs.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">DINGA CAR RENTAL is a family-owned car rental business that has been serving customers for over 10 years. Our fleet consists of a wide range of cars from economy cars to  staff is always ready to help you find the perfect car for your needs and budget. We are dedicated to making car rental a pleasant and hassle-free experience.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;