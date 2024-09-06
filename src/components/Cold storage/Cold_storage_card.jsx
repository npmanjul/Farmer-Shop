import React from 'react'
import Market_place_Rating from '../Market Place/Market_place_Rating'


const storageDetails = [
    {
        product_img: "https://media.istockphoto.com/id/1301368439/photo/fruits-in-crates-ready-for-shipping-cold-storage-interior.jpg?s=612x612&w=0&k=20&c=GCNiTCGPcqKSlvWmlg-vu6nYEjoP_R81Pwa8p9AYYxQ=",
        storage_name:"Royal Ref Enterprises",
        storage_verification:"Verifed",
        city_name:"Gorakhpur",
        state_name:"Uttar Pradesh"

    }
]

const Cold_storage_card = () => {
    return (
        <>
            {storageDetails.map((storageDetail, index) => (
                <div
                    key={index}
                    className="h-[auto] w-[70%] flex justify-center items-center py-4"
                >
                    <div className="h-[auto] w-[100%] bg-gray-100 flex justify-center items-center px-4 py-4 rounded-[15px]">
                        <div>
                            <img
                                src={storageDetail.product_img}
                                alt=""
                                className="w-[500px] h-[200px] rounded-[10px]"
                            />
                        </div>
                        <div className="w-[100%] h-[100%] py-1 px-7">
                            <div className="flex justify-evenly items-start flex-col gap-1">
                                <div className=" flex justify-center item-center gap-3">
                                    <div className="text-3xl font-semibold text-black">{storageDetail.storage_name}</div>
                                    <div className="flex justify-center item-center border border-gray-500 px-5 text-gray-500 rounded-[50px] h-[100%] mt-2 font-semibold">{storageDetail.storage_verification}</div>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <div className='bg-green-700 px-2 py-1 font-semibold text-white rounded-[10px]'>3.5</div>
                                    <div><Market_place_Rating/></div>
                                </div>
                                <div className="flex justify-center items-center gap-3">
                                    <div className="font-semibold text-black">
                                        Price :{" "}
                                        <span className="font-semibold text-gray-500">
                                            Rs {storageDetail.product_price} (Per Kg)
                                        </span>{" "}
                                    </div>
                                    <div>Rating</div>
                                </div>
                                <div className="flex justify-center items-center gap-4">
                                    <div className="font-semibold text-black">
                                        City:{" "}
                                        <span className="font-semibold text-gray-500">
                                            {storageDetail.city_name}
                                        </span>
                                    </div>
                                    <div className="font-semibold text-black">
                                        State:{" "}
                                        <span className="font-semibold text-gray-500">
                                            {storageDetail.state_name}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex justify-center item-center gap-3">
                                    <button className="py-[7px] px-[15px] bg-green-500 font-semibold text-white rounded-[50px]">
                                        Book Now
                                    </button>
                                    <button className="py-[7px] px-[15px] bg-green-500 font-semibold text-white rounded-[50px]">
                                        View Detail
                                    </button>
                                </div>
                                {/* <div className="font-semibold text-black">
                                    Posted by:{" "}
                                    <span className="font-semibold text-gray-500">
                                        {storageDetail.post_by}
                                    </span>{" "}
                                    on{" "}
                                    <span className="font-semibold text-gray-500">
                                        {storageDetail.post_date}
                                    </span>{" "}
                                    in{" "}
                                    <span className="font-semibold text-gray-500">
                                        {storageDetail.categorie}
                                    </span>{" "}
                                    <span className="font-semibold text-gray-500">
                                        {storageDetail.status}
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Cold_storage_card