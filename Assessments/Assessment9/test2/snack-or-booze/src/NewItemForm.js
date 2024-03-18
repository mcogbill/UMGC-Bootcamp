// This is as far as I got then was pretty stuck
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const NewBoxForm = ({ newBox }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    newBox({ ...formData, id: uuid() });
    setFormData({ name: "", description: "", recipe: "", serve: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={formData.name}
            id="name"
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            onChange={handleChange}
            type="text"
            name="description"
            id="description"
            value={formData.description}
          />
        </div>
        <div>
          <label htmlFor="recipe">Recipe</label>
          <input
            onChange={handleChange}
            type="text"
            name="recipe"
            value={formData.recipe}
            id="recipe"
          />
        </div>
        <div>
          <label htmlFor="serve">Serve</label>
          <input
            onChange={handleChange}
            type="text"
            name="serve"
            value={formData.serve}
            id="serve"
          />
        </div>
        <button id="newSnackButton">Add a new snack!</button>
        <button id="newDrinkButton">Add a new drink!</button>
      </form>
    </div>
  );
}

export default NewBoxForm