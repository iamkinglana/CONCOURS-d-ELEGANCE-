import React from 'react';

function Card(props) {
  const { make, model, year, price, image} = props;

  return (
    <div className="card">
      <img src={image} alt={`${make} ${model}`} />
      <div className="details">
        <h3>{make} {model}</h3>
        <p>Year: {year}</p>
        <p>Price: {price}</p>
        
      </div>
    </div>
  );
}

export default Card;
