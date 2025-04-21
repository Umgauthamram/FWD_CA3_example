import React, { useState } from 'react';
import './RecipeBook.css';

function RecipeBook() {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
  });
  const [recipes, setRecipes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) setRecipes([...recipes, formData]);
    else setRecipes(recipes.map((r, i) => i === editIndex ? formData : r));
    setFormData({ name: '', ingredients: '', instructions: '' });
    setEditIndex(null);
  };

  const handleEdit = (i) => {
    setFormData(recipes[i]);
    setEditIndex(i);
  };

  return (
    <div className="container">
      <h2>Recipe Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Recipe Name" value={formData.name} onChange={handleChange} required />
        <textarea name="ingredients" placeholder="Ingredients" value={formData.ingredients} onChange={handleChange} required />
        <textarea name="instructions" placeholder="Instructions" value={formData.instructions} onChange={handleChange} required />
        <button type="submit">{editIndex === null ? 'Add Recipe' : 'Update Recipe'}</button>
      </form>

      <ul>
        {recipes.map((r, i) => (
          <li key={i}>
            <strong>{r.name}</strong>
            <p><em>Ingredients:</em> {r.ingredients}</p>
            <p><em>Instructions:</em> {r.instructions}</p>
            <button onClick={() => handleEdit(i)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeBook;

