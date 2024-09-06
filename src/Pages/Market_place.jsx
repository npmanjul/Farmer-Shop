import React from 'react'
import Market_Place_navigation from '../components/Market Place/Market_Place_navigation'
import {farmer} from '../assets/image'

const Market_place = () => {
  return (
    <>
        <div className='w-full h-screen bg-black text-red-500 flex justify-center items-center flex-row gap-9'>
            {/* <Market_Place_navigation/> */}
            <div className='h-[300px] w-[300px] bg-red-500 rounded-[15px] flex justify-center items-center flex-col gap-5'>
              <img src={farmer} className='h-[150px] w-[150px]'/>
              <div className='text-[24px] text-white font-bold'>As a Farmer</div>
            </div>
            <div className='h-[300px] w-[300px] bg-red-500 rounded-[15px]'></div>
            

        </div>
    </>
  )
}

export default Market_place