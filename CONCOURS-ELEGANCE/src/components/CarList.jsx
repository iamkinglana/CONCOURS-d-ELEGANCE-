import React, { useState, useEffect } from "react";

function CarList() {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3006/cars")
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
        setFilteredCars(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleCardClick = (id) => {
    const clickedCar = cars.find((car) => car.id === id);
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars([...updatedCars, clickedCar]);
    setFilteredCars([...updatedCars, clickedCar]);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3006/cars/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    });
    setCars(cars.filter((car) => car.id !== id));
    setFilteredCars(filteredCars.filter((car) => car.id !== id));
  };

  const filterCars = (e) => {
    const keyword = e.target.value;
    const filtered = cars.filter((car) => {
      return (
        car.Make.toLowerCase().includes(keyword.toLowerCase()) ||
        car.Model.toLowerCase().includes(keyword.toLowerCase())
      );
    });
    setFilteredCars(filtered);
  };

  return (
    <div className="car-collection">
        <h2>CAR COLLECTION</h2>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by Make or Model"
          onChange={filterCars}
        />
      </div>
      <div className="card-list">
        {filteredCars.map((car) => (
          <div
            className="card"
            key={car.id}
            onClick={() => handleCardClick(car.id)}
          >
            <div className="card-image">
              <img src={car.Image_1} alt={car.Make} />
              <img src={car.Image_2} alt={car.Make} />
            </div>
            <div className="card-content">
              <h3>
                {car.Make} {car.Model}
              </h3>
              <p id="catchphrase">{car.Engine}</p>
              <p>
                {car.Origin} {car.top} {car.price}
              </p>
              <button onClick={() => handleDelete(car.id)}>Delete</button>
            </div>
          </div >
        ))}
      </div>
    </div>
  );
}

export default CarList;
