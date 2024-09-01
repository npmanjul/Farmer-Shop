import React from 'react';
import Blank from '../components/Common/Blank';
import Homecarousal from '../components/Home/Homecarousal';
import '../components/Home/homecarousal.css'
import Shopcards from '../components/Home/ShopCards/Shopcards';
import Government_scheme from '../Goverment Scheme/Components/Government_scheme';



const Home = () => {
  return (
    <>
      <Blank/>
      <div className="homecarousal-container"><Homecarousal/></div>
      <Shopcards/>
     <Government_scheme/>

     
    </>
  )
};

export default Home;