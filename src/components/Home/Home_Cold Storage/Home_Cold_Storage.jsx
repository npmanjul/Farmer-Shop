import React from 'react'
import './Home_Cold_storage.css'
import {cold_storage} from '../../../assets/image'


const Home_Cold_Storage = () => {
  return (
    <>
      <div className='Home_cold_storage_wrapper'>
        <div className='Home_cold_storage_container'>
          <div className='Home_cold_storage_left'>
            <div className='Home_cold_storage_heading'>Cold Storage Made Simple</div>
            <div className='Home_cold_storage_btn'>
              <button>Book Your Space Here</button>
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