import React from 'react';
import './Home_Categories_Cards.css';
import all_product from "../../../image/all_product.png";


const categories = [
    {
        image: all_product,
        title: "All Products",
        link:'/allproducts'
    },
    {
        image: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/0d0f7225-3300-4807-84d4-6cbbdb91f7bb.webp",
        title: "Herbicides",
        link:'/herbicides'
    },
    {
        image: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/5cf2150a-69c9-4463-9c89-413d8a10e0f8.webp",
        title: "Growth Promoters",
        link:'/growth'
    },
    {
        image: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/6b996f61-57d4-4ca8-9560-11bda49e36d1.webp",
        title: "Fungicides",
        link:'/fungus'
    },
    {
        image: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/8e5914a3-befb-49fa-a062-1d3f46feff0c.webp",
        title: "Seeds",
        link:'/seeds'
    },
    {
        image: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/6a93ff8a-356a-40a9-a96c-4a789137a5c7.webp",
        title: "Fram Machinery",
        link:'/fram'
    },
    {
        image: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/c0cd59eb-aae2-4f22-ac12-7b8ae37deffd.webp",
        title: "Nutrition",
        link:'/herbicides'
    },
    {
        image: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/5dc946f8-2847-4c55-9fb6-56ec94fca1c7.webp",
        title: "Viricides",
        link:'/herbicides'
    },
    {
        image: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/b9fc5a59-6e8b-4334-880e-b368aeee41fb.webp",
        title: "Insecticides",
        link:'/herbicides'
    },
    {
        image: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/824e1fe8-de7d-4ee8-9ee6-036ebd1b1828.webp",
        title: "Organic Farming",
        link:'/herbicides'
    },
    {
        image: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/fc753dec-81cd-45f3-8dad-2206a7293732.webp",
        title: "Animal Husbandry ",
        link:'/herbicides'
    },
    {
        image: "https://bighaat-prodv2-media-cdn.azureedge.net/wsfbanners/fb1880a5-f00f-458b-b0dc-6c5dab144005.webp",
        title: "New Product",
        link:'/herbicides'
    },

];

const Shopcards = () => {
    return (
        <>
            <div className="Home-Shopcards-wrapper">
            <div className='Home-Shopcards-heading'>Categories</div>
                <div className="Home-Shopcards-container">
                    {categories.map((category, index) => (
                        
                        <a href={category.link}>
                        <div className='Home-Shopcards-box' key={index}>
                            <div className='Home-Shopcards-box-image'>
                                <img src={category.image} alt={category.title} /> 
                            </div>
                            <div className='Home-Shopcards-box-title'>
                                {category.title}
                            </div>
                        </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Shopcards;