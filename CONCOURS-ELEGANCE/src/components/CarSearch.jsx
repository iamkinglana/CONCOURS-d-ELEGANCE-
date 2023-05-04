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
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <ul className="car-search-results">
          {searchResults.map((car) => (
            <li key={car.id}>
              {car.make} {car.model} ({car.year})
              <p>Name: {car.name}</p>
              <p>Make: {car.make}</p>
              <p>Year: {car.year}</p>
              <p>Fuel Type: {car.fuel_type}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CarSearch;

