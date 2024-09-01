import React from 'react';
import Homecarousal from '../components/Home/Home_Carousal/Homecarousal';
import Home_Categories_Card from '../components/Home/Home_Categories_Cards/Home_Categories_Card';
import Home_gov_sch from '../components/Home/Gov_Scheme/Home_gov_sch';
import Home_Cold_Storage from '../components/Home/Home_Cold Storage/Home_Cold_Storage';

const Home = () => {
  return (
    <>
      <div className="homecarousal-container"><Homecarousal/></div>
      <Home_Categories_Card/>
      <Home_Cold_Storage/>
      <Home_gov_sch/>

     
    </>
  )
};

export default Home;