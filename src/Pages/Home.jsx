import React from 'react';
import Homecarousal from '../components/Home/Home_Carousal/Homecarousal';
import Home_Categories_Card from '../components/Home/Home_Categories_Cards/Home_Categories_Card';
import Home_gov_sch from '../components/Home/Gov_Scheme/Home_gov_sch';
import Home_Cold_Storage from '../components/Home/Home_Cold Storage/Home_Cold_Storage';
import Home_market_place from '../components/Home/Home_market_place/Home_market_place';
import Hero_hero from '../image/Home_hero.jpg'
import Home_rental_marketplace from '../components/Home/Home_Rental_marketplace/Home_rental_marketplace';

const Home = () => {
  return (
    <>
        <div className="homecarousal-container">
        <img src={Hero_hero} className='h-[70vh] w-full'/>
        </div>
        <Home_Categories_Card />
        <Home_Cold_Storage />
        <Home_gov_sch />
        <Home_market_place />
        {/* <Home_rental_marketplace/> */}
    </>
  )
};

export default Home;