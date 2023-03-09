import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="DINGA is here for you" />
      <h1 className="app__header-h1">Are you looking for a reliable and affordable car rental service? </h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Look no further than DINGA CAR RENTAL! We offer a wide selection of vehicles, from economy to luxury, to accommodate all of your transportation needs. Our friendly staff is always on hand to help you select the perfect car for your needs and our competitive prices are sure to make your wallet happy. With DINGA CAR RENTAL, you can rest assured knowing that you're getting the highest quality car rental service. When you're ready for your next car rental, choose to DINGA CAR RENTAL  we are sure it wont be your last .</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;