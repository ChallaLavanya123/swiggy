import React from 'react';
import Header from './components/header';
import SearchBar from './components/searchbar';
import RestaurantCard from './components/restaurantcard';
import FoodList from './components/foodlist';


function App() {
  
  const restaurants = [
    { id: 1, name:'Mehfil Biryani' ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png"},
    { id: 2, name: 'Pizza Corner' ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png" },
    { id: 3, name: 'Chai Point', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/19/63049b6a-d048-4d69-b625-07c395431dc2_ccfe6fd3-2656-4522-ad53-76464c3cc286.jpg"},
    { id: 4, name: 'North Indian' ,image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/05a939eb-fd4e-4308-b989-d1c54f4421b3_northindian1.png" },
    { id: 5, name: 'Burgers', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png"},
    { id: 6, name: 'Rolls', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png"},
    { id: 7, name: 'Chinese', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2025/1/24/897bc750-6b57-4e7d-9365-87c1ab2c6d7e_Chinese2.png"},
    { id: 8, name: 'South Indian', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png"},
    { id: 9, name: 'Cakes', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png"},
    { id: 10, name: 'Ice-Creams', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate icecream.png" },
    { id: 11, name: 'Kebabs', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kebabs.png"},
    { id: 12, name: 'Pure-veg', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure Veg.png" },
    { id: 13, name: 'Pasta', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png"},
    { id: 14, name: 'Noodles', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png"},
    { id: 15, name: 'Shakes', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png"},
    {id: 16, name: 'Gulab Jamun', image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab jamun.png" },
  ];

  const foodItems = [
    {
      name: "Chicken Biryani",
      price: "₹250",
      rating: 4.5,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0vvulfbahjxjz6k4uwi",
      
    },
    {
      name: "Pizza Hut",
      price: "₹220",
      rating: 4.4,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/7a16c16a-e3dd-43c4-a094-5d41392de24d_10575.JPG",
    },
    {
      name: "Theobroma",
      price: "₹200",
      rating: 4.4,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/4/9/716267c7-7871-4d9d-ac71-ddb40ac6744d_426730.jpg" ,
    },
    {
      name: "Chinese Work",
      price: "₹100",
      rating: 4.4,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
    },
    {
      name: "Wendy's Burger",
      price: "₹200",
      rating: 4.4,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/abe687dd-c957-4a15-86b2-9136210a5d93_953489.JPG" ,
    },
    {
      name: "Mad over Donuts",
      price: "₹320",
      rating: 4.4,
      img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/5/12/cb799c49-fc77-4ab2-8807-8b3c660b466b_3900.jpg",
    },
    
      
  
  ];

  return (
    <div>
      <Header />
      <SearchBar />
      <div className="image-container">
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/Food_collectionbanner.png"></img>
      <div className='image-text'>Order Online Delivery Restaurants Near Me</div>
      </div>
      <div className="horizontal-scroll">
      
      {restaurants.map((res) => (
    
      <RestaurantCard key={res.id} restaurant={res} />
      ))}
      </div>
      
      <h1>Best Food Outlets Near Me</h1>
      <FoodList foods={foodItems} />
     
    
      
      
      </div>
  );

 }    
      
export default App;

