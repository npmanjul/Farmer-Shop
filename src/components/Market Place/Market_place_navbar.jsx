import React from 'react'

const Market_place_navbar = () => {
  return (
    <>
         <div className='h-[auto] w-full bg-gray-500'>
                <div className='flex justify-between items-center py-[20px]'>
                    <div className='flex justify-between items-center gap-8 px-4'>
                        <button className='py-[10px] px-[20px] bg-yellow-500 font-semibold text-white rounded-[50px]' >All </button>
                        <button className='py-[10px] px-[20px] bg-yellow-500 font-semibold text-white rounded-[50px]'>Company</button>
                        <button className='py-[10px] px-[20px] bg-yellow-500 font-semibold text-white rounded-[50px]'>Selling</button>
                    </div>
                    <div className='flex justify-between items-center gap-8 px-4'>
                        <button className='py-[10px] px-[20px] bg-yellow-500 font-semibold text-white rounded-[50px]' >Register as Seller</button>
                        <button className='py-[10px] px-[20px] bg-yellow-500 font-semibold text-white rounded-[50px]'>Register as Buyer</button>
                    </div>
                </div>

            </div>
    </>
  )
}

export default Market_place_navbar