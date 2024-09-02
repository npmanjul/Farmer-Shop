import React from "react";

const market_products = [
  {
    product_img:
      "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 100000,
    product_price: 20,
    city_name: "Prayagraj",
    state_name: "Uttar Pradesh",
    post_by: "Anjul",
    post_date: "10-07-2024",
    categorie: "Tomato",
    status: "NEVER",
  },
  {
    product_img:
      "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 100000,
    product_price: 20,
    city_name: "Prayagraj",
    state_name: "Uttar Pradesh",
    post_by: "Anjul",
    post_date: "10-07-2024",
    categorie: "Tomato",
    status: "NEVER",
  },
  {
    product_img:
      "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 100000,
    product_price: 20,
    city_name: "Prayagraj",
    state_name: "Uttar Pradesh",
    post_by: "Anjul",
    post_date: "10-07-2024",
    categorie: "Tomato",
    status: "NEVER",
  },
  {
    product_img:
      "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 100000,
    product_price: 20,
    city_name: "Prayagraj",
    state_name: "Uttar Pradesh",
    post_by: "Anjul",
    post_date: "10-07-2024",
    categorie: "Tomato",
    status: "NEVER",
  },
  {
    product_img:
      "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 100000,
    product_price: 20,
    city_name: "Prayagraj",
    state_name: "Uttar Pradesh",
    post_by: "Anjul",
    post_date: "10-07-2024",
    categorie: "Tomato",
    status: "NEVER",
  },
  {
    product_img:
      "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 100000,
    product_price: 20,
    city_name: "Prayagraj",
    state_name: "Uttar Pradesh",
    post_by: "Anjul",
    post_date: "10-07-2024",
    categorie: "Tomato",
    status: "NEVER",
  },
  {
    product_img:
      "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 100000,
    product_price: 20,
    city_name: "Prayagraj",
    state_name: "Uttar Pradesh",
    post_by: "Anjul",
    post_date: "10-07-2024",
    categorie: "Tomato",
    status: "NEVER",
  },
  {
    product_img:
      "https://images.pexels.com/photos/54084/wheat-grain-agriculture-seed-54084.jpeg?cs=srgb&dl=pexels-pixabay-54084.jpg&fm=jpg",
    avaliable_stock: 100000,
    product_price: 20,
    city_name: "Prayagraj",
    state_name: "Uttar Pradesh",
    post_by: "Anjul",
    post_date: "10-07-2024",
    categorie: "Tomato",
    status: "NEVER",
  },
];

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
                className="w-[500px] h-[auto] rounded-[10px]"
              />
            </div>
            <div className="w-[100%] h-[100%] py-1 px-7">
              <div className="flex justify-evenly items-start flex-col gap-1">
                <div className="text-3xl font-semibold text-black">
                  Fresh tomatoes
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
