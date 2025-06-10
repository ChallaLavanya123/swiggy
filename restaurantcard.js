import React from 'react';

function RestaurantCard({ restaurant }) {
  return (
    <div className="card">
      <img src={restaurant.image} alt={restaurant.name} className="image-sizes"/>
      <h3>{restaurant.name}</h3>
    </div>
  );
}

export default RestaurantCard;
