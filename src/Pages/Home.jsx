import React from 'react';
import Blank from '../components/Common/Blank';
import Homecarousal from '../components/Home/Homecarousal';
import '../components/Home/homecarousal.css'
import Shopcards from '../components/Home/ShopCards/Shopcards';
import Home_cold_storage from '../Goverment Scheme/Components/Home_cold_storage';



const Home = () => {
  return (
    <>
      <Blank/>
      <div className="homecarousal-container"><Homecarousal/></div>
      <Shopcards/>
      <Home_cold_storage/>

     
    </>
  )
};

export default Home;