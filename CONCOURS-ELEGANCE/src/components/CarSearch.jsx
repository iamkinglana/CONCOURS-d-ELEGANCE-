import React, { useState } from "react";

function CarSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?fuel_type=gas&model=${searchTerm}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "96c3540fd4mshd4f7cddde3a865bp183496jsnf78eb2795009",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      },
    };
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="car-search-container">
      <h1 className="headeer">Vintages</h1>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <ul className="car-search-results">
          {searchResults.map((car) => (
            <li key={car.id}>
              {car.make} {car.model} ({car.year})
              
              <p>Make: {car.make}</p>
              <p>Model: {car.model}</p>
              <p>Year: {car.year}</p>
              <p>Fuel Type: {car.fuel_type}</p>
              <p>Transmission: {car.transmission}</p>
              <p>Class: {car.class}</p>
              <p>Cylinders: {car.cylinders}</p>
              <p>City mpg: {car.city_mpg}</p>
              <p>Combination mpg: {car.combination_mpg}</p>
              <p>Highway mpg: {car.highway_mpg}</p>
              
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CarSearch;

