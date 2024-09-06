import React from "react";


const products = [
    {
      "name": "Wheat Seed",
      "rating": 4.5,
      "grain_type": "Cereal",
      "price": 30,
      "description": "High-quality wheat seed ideal for all climates.",
      "review": "Grows well in diverse soil types.",
      "image": "https://media.istockphoto.com/id/171553200/photo/wheat-berries-background.jpg?s=612x612&w=0&k=20&c=907B7IcP8MieoXvLzLILSqy05gTjehDBcSb-R2Wzmj4="
    },
    {
      "name": "Rice Seed",
      "rating": 4.7,
      "grain_type": "Cereal",
      "price": 35,
      "description": "Premium rice seed with high yield potential.",
      "review": "Excellent quality, grows uniformly.",
      "image": "https://thumbs.dreamstime.com/b/background-wallpaper-pile-paddy-rice-seed-top-view-floor-close-up-brown-grain-125541002.jpg"
    },
    {
      "name": "Maize Seed",
      "rating": 4.3,
      "grain_type": "Cereal",
      "price": 28,
      "description": "Hybrid maize seed resistant to pests.",
      "review": "Good germination and robust growth.",
      "image": "https://thumbs.dreamstime.com/b/corn-maize-seeds-close-up-shot-above-57602986.jpg"
    },
    {
      "name": "Barley Seed",
      "rating": 4.1,
      "grain_type": "Cereal",
      "price": 25,
      "description": "High-yield barley seed suited for brewing.",
      "review": "Produces a hearty crop with strong roots.",
      "image": "https://t3.ftcdn.net/jpg/04/53/31/92/360_F_453319239_gfodTaG7yrnHPC3b8O2vJwlllIJtS3xW.jpg"
    },
    {
      "name": "Millet Seed",
      "rating": 4.4,
      "grain_type": "Cereal",
      "price": 22,
      "description": "Drought-resistant millet seed for arid regions.",
      "review": "Ideal for dry conditions, grows fast.",
      "image": "https://media.istockphoto.com/id/1262684430/photo/closeup-view-of-a-white-millet-jowar.jpg?s=612x612&w=0&k=20&c=HLyBy06EjbABKybUy1nIQTfxMLV1-s4xofGigOdd6dU="
    },
    {
      "name": "Sorghum Seed",
      "rating": 4.6,
      "grain_type": "Cereal",
      "price": 26,
      "description": "Versatile sorghum seed for livestock and grain production.",
      "review": "Great for silage and grain, high adaptability.",
      "image": "https://www.feedipedia.org/sites/default/files/images/sorghum_grain_01_0.jpg"
    },
    {
      "name": "Sunflower Seed",
      "rating": 4.5,
      "grain_type": "Oilseed",
      "price": 40,
      "description": "High-oil content sunflower seed for oil extraction.",
      "review": "Produces large, healthy sunflowers with high oil yield.",
      "image": "https://media.istockphoto.com/id/153572197/photo/closeup-of-sunflower-seeds.jpg?s=612x612&w=0&k=20&c=GP4ILfhx-Xlee6oGYhJK4i_lzrjuWdEXnMzItr96IdA="
    },
    {
      "name": "Soybean Seed",
      "rating": 4.8,
      "grain_type": "Oilseed",
      "price": 50,
      "description": "High-protein soybean seed ideal for both oil and meal production.",
      "review": "Excellent germination and good disease resistance.",
      "image": "https://t3.ftcdn.net/jpg/04/70/80/38/360_F_470803886_dCubLzcr5ASXmGYxl3hLbRUmuFziax7a.jpg"
    },
    {
        "name": "Maize Seed",
        "rating": 4.3,
        "grain_type": "Cereal",
        "price": 28,
        "description": "Hybrid maize seed resistant to pests.",
        "review": "Good germination and robust growth.",
        "image": "https://thumbs.dreamstime.com/b/corn-maize-seeds-close-up-shot-above-57602986.jpg"
      },
      {
        "name": "Barley Seed",
        "rating": 4.1,
        "grain_type": "Cereal",
        "price": 25,
        "description": "High-yield barley seed suited for brewing.",
        "review": "Produces a hearty crop with strong roots.",
        "image": "https://t3.ftcdn.net/jpg/04/53/31/92/360_F_453319239_gfodTaG7yrnHPC3b8O2vJwlllIJtS3xW.jpg"
      },
      {
        "name": "Millet Seed",
        "rating": 4.4,
        "grain_type": "Cereal",
        "price": 22,
        "description": "Drought-resistant millet seed for arid regions.",
        "review": "Ideal for dry conditions, grows fast.",
        "image": "https://media.istockphoto.com/id/1262684430/photo/closeup-view-of-a-white-millet-jowar.jpg?s=612x612&w=0&k=20&c=HLyBy06EjbABKybUy1nIQTfxMLV1-s4xofGigOdd6dU="
      },
  ]
  

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.description}</p>
        <p className="text-gray-700 text-base">Grain Type: {product.grain_type}</p>
        <p className="text-gray-700 text-base">Price: Rs {product.price} </p>
        <p className="text-gray-700 text-base">Rating: {product.rating} ⭐</p>
      </div>
    </div>
  );
};

const ProductGallery = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold">Seed</h1>
      </header>
      <main className="flex flex-col md:flex-row justify-center items-center p-4">

        <div className="product-gallery md:w-1/2 w-full p-4">
          <ProductGallery />
        </div>
      </main>
    </div>
  );
};

export default App;
