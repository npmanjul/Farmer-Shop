import React from 'react'

const Home_rental_marketplace = () => {
  return (
    <>
    <div className='Home_gov_scheme_wrapper'>
      <div className='Home_gov_scheme_container'>
        <div className='Home_gov_scheme_left'>
        {/* <img src={}/> */}
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

export default Home_rental_marketplace