import React from 'react'
import Market_Place_Card from '../components/Market Place/Market_Place_Card'
import Market_place_navbar from '../components/Market Place/Market_place_navbar'
import Market_Place_navigation from '../components/Market Place/Market_Place_navigation'

const Market_place = () => {
  return (
    <>
        <div>
            {/* <Market_place_navbar/> */}
            <Market_Place_navigation/>
           {/* <div className='py-9'> <Market_Place_Card/></div> */}
        </div>
    </>
  )
}

export default Market_place