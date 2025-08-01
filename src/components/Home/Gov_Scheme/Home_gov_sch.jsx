import React from 'react'
import './Home_gov_sch.css'
import {Home_gov_scheme_img} from '../../../assets/image'
import { NavLink } from 'react-router-dom'


const Home_gov_sch = () => {
  return (
    <>
      <div className='Home_gov_scheme_wrapper'>
        <div className='Home_gov_scheme_container'>
          <div className='Home_gov_scheme_left'>
          <img src={Home_gov_scheme_img}/>
          </div>
          <div className='Home_gov_scheme_Right'>
          <div className='Home_gov_scheme_heading'>Discover Goverment Schemes For You</div>
          <div className='Home_gov_scheme_explore_btn' >
           <NavLink to={"./gov_scheme"}  > <button>Explore more....</button></NavLink>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home_gov_sch