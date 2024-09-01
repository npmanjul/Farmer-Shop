import React from 'react'
import './Shopcards.css'
import all_product from "../../../image/all_product.png"
import imgs1 from "../../../image/demo1.png"
import imgs2 from "../../../image/demo2.png"
import imgs3 from "../../../image/demo3.png"


const Shopcards = () => {
    return (
        <>
            <div className="Shopcards-container">
                <div className='Shopcards-box'>
                    <div className='Shopcards-box-image'>
                        <img src={all_product} alt='' />
                    </div>
                    <div className='Shopcards-box-title'>All Product</div>
                </div>
                <div className='Shopcards-box'>
                    <div className='Shopcards-box-image'>
                        <img src={"https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/0d0f7225-3300-4807-84d4-6cbbdb91f7bb.webp"} alt='' />
                    </div>
                    <div className='Shopcards-box-title'>Seeds</div>
                </div>
                <div className='Shopcards-box'>
                    <div className='Shopcards-box-image'>
                        <img src={"https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/5cf2150a-69c9-4463-9c89-413d8a10e0f8.webp"} alt='' />
                    </div>
                    <div className='Shopcards-box-title'>Seeds</div>
                </div>
                <div className='Shopcards-box'>
                    <div className='Shopcards-box-image'>
                        <img src={"https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/5cf2150a-69c9-4463-9c89-413d8a10e0f8.webp"} alt='' />
                    </div>
                    <div className='Shopcards-box-title'>Seeds</div>
                </div>
                <div className='Shopcards-box'>
                    <div className='Shopcards-box-image'>
                        <img src={"https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/6b996f61-57d4-4ca8-9560-11bda49e36d1.webp"} alt='' />
                    </div>
                    <div className='Shopcards-box-title'>Seeds</div>
                </div>
                <div className='Shopcards-box'>
                    <div className='Shopcards-box-image'>
                        <img src={imgs1} alt='' />
                    </div>
                    <div className='Shopcards-box-title'>Seeds</div>
                </div>
                <div className='Shopcards-box'>
                    <div className='Shopcards-box-image'>
                        <img src={"https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/6a93ff8a-356a-40a9-a96c-4a789137a5c7.webp"} alt='' />
                    </div>
                    <div className='Shopcards-box-title'>Equipment / Tools</div>
                </div>
                <div className='Shopcards-box'>
                    <div className='Shopcards-box-image'>
                        <img src={imgs3} alt='' />
                    </div>
                    <div className='Shopcards-box-title'>Fertilizer</div>
                </div>

            </div>
        </>
    )
}

export default Shopcards