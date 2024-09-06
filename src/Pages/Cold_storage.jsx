import React from 'react'
import Cold_storage_card from '../components/Cold storage/Cold_storage_card'
import Cold_storage_navbar from '../components/Cold storage/Cold_storage_navbar'

const Cold_storage = () => {
  return ( 
    <>
     <Cold_storage_navbar/>
      <div className='w-full flex justify-center items-center'><Cold_storage_card/></div>
    </>
  )
}

export default Cold_storage