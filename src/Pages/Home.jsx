import React from 'react';
import Homecarousal from '../components/Home/Home_Carousal/Homecarousal';
import Home_Categories_Card from '../components/Home/Home_Categories_Cards/Home_Categories_Card';
import Home_gov_sch from '../components/Home/Gov_Scheme/Home_gov_sch';
import Home_Cold_Storage from '../components/Home/Home_Cold Storage/Home_Cold_Storage';
import Home_market_place from '../components/Home/Home_market_place/Home_market_place';

const Home = () => {
  return (
    <>
      <div className='bg-gradient-to-br from-green-500/25 to-yellow-500/30 w-full h-full backdrop-blur-lg'>
        <div className="homecarousal-container"><Homecarousal /></div>
        <Home_Categories_Card />
        <Home_Cold_Storage />
        <Home_gov_sch />
        <Home_market_place />
      </div>
    </>
  )
};

export default Home;