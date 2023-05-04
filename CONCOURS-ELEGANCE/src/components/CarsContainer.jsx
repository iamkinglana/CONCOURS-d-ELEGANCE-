import React from "react";
import CarList from "./CarList";
import Search from "./SearchCars";
import AddCarsForm from "./AddCarsForm";
function CarsContainer({
	  
    cars,
	handleAddCars,
	handleSearch,
	handleDeleteCars,
}) {
	return (
		<div>
			<Search handleSearch={handleSearch} />
			<AddCarsForm
				handleAddCars={handleAddCars}
				cars={cars}
			/>
			{/* <CarList
				cars={cars}
				handleDeleteCars={handleDeleteCars}
			/> */}
		</div>
	);
}
export default CarsContainer;

