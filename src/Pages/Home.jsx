import React from 'react';
import Blank from '../components/Common/Blank';
import Homecarousal from '../components/Home/Homecarousal';
import '../components/Home/homecarousal.css'



const Home = () => {
  return (
    <>
      <Blank/>
      {/* <div className="test">Home</div> */}
      <div className="homecarousal-container"><Homecarousal/></div>
     
    </>
  )
};

export default Home;