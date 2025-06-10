import React from 'react';

function FoodList({ foods }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', padding: '16px' }}>
      {foods.map((food, index) => (
        <div key={index} style={{
            
            borderRadius: '8px',
            
            width: '200px',
            height: '100px',
            textAlign: 'center',
          }}>
          <img src={food.img} alt={food.name}  className="food-list-image"style={{ width: '180px', height: '130px', borderRadius: '4px' }}/>
          <h3>{food.name}</h3>
          <p>Price: {food.price}</p>
          <p>Rating: ⭐ {food.rating}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FoodList;
