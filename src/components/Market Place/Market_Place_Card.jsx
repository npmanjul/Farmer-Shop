import  Market_place_Rating  from "./Market_place_Rating";
import React from "react";
import useLocalStorage from "../../lib/hooks/useLocalStorage";
import { useState, useEffect } from "react";

const Market_Place_Card = () => {




  const [market_products] = useLocalStorage('market_products');
  if (!market_products) return <div>Loading...</div>
  console.log(market_products);

  return (
    <>
      {market_products.map((market_product, index) => (
        <div
          key={market_product.productId ? market_product.productId : market_product.sellerId ? market_product.sellerId : index}
          className="h-[auto] w-[100%] flex justify-center items-center py-4"
        >
          <div className="h-[auto] w-[100%] bg-gray-100 flex justify-center items-center px-4 py-4 rounded-[15px]">
            <div>
              <Image imgArray={market_product.images} alt="" className="w-[500px] h-[200px] rounded-[10px]" />
              {/* <img
                src={market_product?.images[0] ? market_product?.images[0] : "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"}
                alt=""
                className="w-[500px] h-[200px] rounded-[10px]"
              /> */}
            </div>
            <div className="w-[100%] h-[100%] py-1 px-7">
              <div className="flex justify-evenly items-start flex-col gap-1">
                <div className=" flex justify-center item-center gap-3">
                  <div className="text-3xl font-semibold text-black">{market_product.name}</div>
                  <div className="flex justify-center item-center border border-gray-500 px-5 text-gray-500 rounded-[50px] h-[100%] mt-2 font-semibold">{"Supply"}</div>
                </div>
                <div className="font-semibold text-black">
                  Available Stock Weight (Kg) :{" "}
                  <span className="font-semibold text-gray-500">
                    {market_product.quantity}{" "}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <div className="font-semibold text-black">
                    Price :{" "}
                    <span className="font-semibold text-gray-500">
                      Rs {market_product.price} (Per Kg)
                    </span>{" "}
                  </div>
                  <div><Market_place_Rating/></div>
                </div>
                <div className="flex justify-center items-center gap-4">
                  {market_product?.location?.city && <div className="font-semibold text-black">
                    City:{" "}
                    <span className="font-semibold text-gray-500">
                      {market_product.location.city}
                    </span>
                  </div>}
                  {market_product?.location?.state && <div className="font-semibold text-black">
                    State:{" "}
                    <span className="font-semibold text-gray-500">
                      {market_product.location.state}
                    </span>
                  </div>}
                </div>
                <div className="flex justify-center item-center gap-3">
                  <button className="py-[7px] px-[15px] bg-green-500 font-semibold text-white rounded-[50px]">
                    Buy Now
                  </button>
                  <button className="py-[7px] px-[15px] bg-green-500 font-semibold text-white rounded-[50px]">
                    View Detail
                  </button>
                </div>
                <div className="font-semibold text-black flex flex-col">

                  <span className="font-semibold text-gray-500">
                    Posted
                    on :
                    {new Date(market_product.createdAt).toLocaleDateString()}
                  </span>

                  <span className="font-semibold text-gray-500">
                    Harvested on :
                    {market_product.harvestDate}
                  </span>
                  <span className="font-semibold text-gray-500">
                    {market_product.variety && " Variety : " + market_product.variety}
                  </span>

                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Market_Place_Card;


function Image({ imgArray, alt }) {

  const [storedFile, setStoredFile] = useState();
  let src = "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"

  useEffect(() => {
    if (imgArray.length > 0) {
      const srccurr = imgArray[0];
      console.log("srccurr=", srccurr)
      const fileMetadataString = localStorage.getItem(srccurr);
      if (fileMetadataString) {
        const fileMetadata = JSON.parse(fileMetadataString);
        const fileURL = fileMetadata.data;

        if (fileURL) {
          setStoredFile(fileURL);
        }
      }
    }
  }, []);

  return (

    <img src={storedFile ? storedFile : src} alt={alt} className="w-[500px] h-[200px] rounded-[10px]" />
  );
}