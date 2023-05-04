import React from "react";
import ImageSlider from "./SliderContainer";

function AddCarsForm({ handleAddCars }) {
  const [formData, setFormData] = React.useState({
    date: "",
    description: "",
    category: "",
    amount: null
  });
  const handlePostCars = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch("http://localhost:3006/cars", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          date: formData.date,
          description: formData.description,
          category: formData.category,
          amount: formData.amount
        })
      });
      const jsonRes = await res.json();
      handleAddCars(jsonRes);
      setFormData({
        description: "",
        category: "",
        amount: null
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handlePostCars}>
        <div className="inline fields">
          <ImageSlider />
          <input
            type="number"
            value={formData.amount}
            name="Id"
            placeholder="Id"
            step="0.01"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.description}
            name="Make"
            placeholder="Make"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.category}
            name="Model"
            placeholder="Model"
            onChange={handleChange}
          />
          <input
            type="number"
            value={formData.amount}
            name="Debuted"
            placeholder="Debuted"
            step="0.01"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.category}
            name="Engine"
            placeholder="Engine"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.category}
            name="Acceleration"
            placeholder="Acceleration"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.category}
            name="Top Speed"
            placeholder="Top Speed"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.category}
            name="Horse Power"
            placeholder="Horse Power"
            onChange={handleChange}
          />
           <input
            type="text"
            value={formData.category}
            name="Fuel Type"
            placeholder="Fuel Type"
            onChange={handleChange}
          />
           <input
            type="text"
            value={formData.category}
            name="Price"
            placeholder="Price"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.category}
            name="Origin"
            placeholder="Origin"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.category}
            name="Units Produced"
            placeholder="Units Produced"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.category}
            name="Image_1"
            placeholder="Image_1"
            onChange={handleChange}
          />
          <input
            type="text"
            value={formData.category}
            name="Image_2"
            placeholder="Image_2"
            onChange={handleChange}
          />
          
        </div>
        <button className="ui button" type="submit">
          Add Cars
        </button>
      </form>
    </div>
  );
}
export default AddCarsForm;
