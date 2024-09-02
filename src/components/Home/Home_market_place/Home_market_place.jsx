import React from 'react'
import './Home_market_place.css'
import { Link } from 'react-router-dom'

const Home_market_place = () => {
  return (
    <>
          <div className='Home_market_place_wrapper'>
        <div className='Home_market_place_container'>
          <div className='Home_market_place_left'>
            <div className='Home_market_place_heading'>Big market, big profits<div className='text-[22px]'>Turn your harvest into success</div></div>
            <div className='Home_market_place_btn'>
              <button><Link to="/marketplace">Sell Your Crop Here</Link></button>
            </div>
          </div>
          <div className='Home_market_place_right'>
          <video
          width="80%"
          playsInline
          autoPlay
          muted
          loop
          type="video/mp4"
          src="https://agrimp-prod.s3.amazonaws.com/public/OVP_Video.mp4"
        ></video>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_market_place