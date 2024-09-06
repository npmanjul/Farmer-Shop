import React from 'react'
import './Home_Cold_storage.css'
import {cold_storage} from '../../../assets/image'
import { Link } from 'react-router-dom'


const Home_Cold_Storage = () => {
  return (
    <>
      <div className='Home_cold_storage_wrapper'>
        <div className='Home_cold_storage_container'>
          <div className='Home_cold_storage_left'>
            <div className='Home_cold_storage_heading'>Cold Storage, Made Simple</div>
            <div className='text-[20px] font-semibold'>Streamlined Solutions for Preserving Freshness</div>
            <div className='Home_cold_storage_btn'>
              <Link to="/cold_storage"><button>Book Your Space Here</button></Link>
            </div>
          </div>
          <div className='Home_cold_storage_right'>
            <img src={cold_storage}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_Cold_Storage