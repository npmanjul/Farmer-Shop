import React from "react";

const market_products = [
  {
    type: "Demand",
    product_name: "Tomato",
    product_img: "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 100000,
    product_price: 20,
    city_name: "Prayagraj",
    state_name: "Uttar Pradesh",
    post_by: "Anjul",
    post_date: "10-07-2024",
    categorie: "Tomato",
    status: "Complete",
  },
  {
    type: "Supply",
    product_name: "Potato",
    product_img: "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 100000,
    product_price: 20,
    city_name: "Kanpur",
    state_name: "Uttar Pradesh",
    post_by: "Ravi Narayan",
    post_date: "10-07-2024",
    categorie: "Potato",
    status: "Pending",
  },
  {
    type: "Supply",
    product_name: "Wheat",
    product_img: "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 100000,
    product_price: 20,
    city_name: "Kanpur",
    state_name: "Uttar Pradesh",
    post_by: "Ravi Narayan",
    post_date: "10-07-2024",
    categorie: "Potato",
    status: "Pending",
  },
  {
    type: "Demand",
    product_name: "Rice",
    product_img: "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 150000,
    product_price: 30,
    city_name: "Lucknow",
    state_name: "Uttar Pradesh",
    post_by: "Sunita Rani",
    post_date: "11-07-2024",
    categorie: "Rice",
    status: "Complete",
  },
  {
    type: "Supply",
    product_name: "Barley",
    product_img: "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 80000,
    product_price: 25,
    city_name: "Agra",
    state_name: "Uttar Pradesh",
    post_by: "Rajesh Kumar",
    post_date: "12-07-2024",
    categorie: "Barley",
    status: "Pending",
  },
  {
    type: "Demand",
    product_name: "Corn",
    product_img: "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 120000,
    product_price: 22,
    city_name: "Varanasi",
    state_name: "Uttar Pradesh",
    post_by: "Amit Singh",
    post_date: "13-07-2024",
    categorie: "Corn",
    status: "Complete",
  },
  
]

const Market_Place_Card = () => {
  return (
    <>
      {market_products.map((market_product, index) => (
        <div
          key={index}
          className="h-[auto] w-[100%] flex justify-center items-center py-4"
        >
          <div className="h-[auto] w-[100%] bg-gray-100 flex justify-center items-center px-4 py-4 rounded-[15px]">
            <div>
              <img
                src={market_product.product_img}
                alt=""
                className="w-[500px] h-[200px] rounded-[10px]"
              />
            </div>
            <div className="w-[100%] h-[100%] py-1 px-7">
              <div className="flex justify-evenly items-start flex-col gap-1">
                <div className=" flex justify-center item-center gap-3">
                  <div className="text-3xl font-semibold text-black">{market_product.product_name}</div>
                  <div className="flex justify-center item-center border border-gray-500 px-5 text-gray-500 rounded-[50px] h-[100%] mt-2 font-semibold">{market_product.type}</div>
                </div>
                <div className="font-semibold text-black">
                  Available Stock Weight (Kg) :{" "}
                  <span className="font-semibold text-gray-500">
                    {market_product.avaliable_stock}{" "}
                  </span>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <div className="font-semibold text-black">
                    Price :{" "}
                    <span className="font-semibold text-gray-500">
                      Rs {market_product.product_price} (Per Kg)
                    </span>{" "}
                  </div>
                  <div>Rating</div>
                </div>
                <div className="flex justify-center items-center gap-4">
                  <div className="font-semibold text-black">
                    City:{" "}
                    <span className="font-semibold text-gray-500">
                      {market_product.city_name}
                    </span>
                  </div>
                  <div className="font-semibold text-black">
                    State:{" "}
                    <span className="font-semibold text-gray-500">
                      {market_product.state_name}
                    </span>
                  </div>
                </div>
                <div className="flex justify-center item-center gap-3">
                  <button className="py-[7px] px-[15px] bg-green-500 font-semibold text-white rounded-[50px]">
                    Buy Now
                  </button>
                  <button className="py-[7px] px-[15px] bg-green-500 font-semibold text-white rounded-[50px]">
                    View Detail
                  </button>
                </div>
                <div className="font-semibold text-black">
                  Posted by:{" "}
                  <span className="font-semibold text-gray-500">
                    {market_product.post_by}
                  </span>{" "}
                  on{" "}
                  <span className="font-semibold text-gray-500">
                    {market_product.post_date}
                  </span>{" "}
                  in{" "}
                  <span className="font-semibold text-gray-500">
                    {market_product.categorie}
                  </span>{" "}
                  <span className="font-semibold text-gray-500">
                    {market_product.status}
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
