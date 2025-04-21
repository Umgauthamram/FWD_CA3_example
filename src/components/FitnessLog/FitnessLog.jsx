import React, { useState } from 'react';
import './FitnessLog.css';

function FitnessLog() {
  const [formData, setFormData] = useState({
    name: '',
    sets: '',
    reps: '',
    weight: '',
  });
  const [exercises, setExercises] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) {
      setExercises([...exercises, formData]);
    } else {
      const updated = exercises.map((ex, i) => i === editIndex ? formData : ex);
      setExercises(updated);
    }
    setFormData({ name: '', sets: '', reps: '', weight: '' });
    setEditIndex(null);
  };

  const handleEdit = (i) => {
    setFormData(exercises[i]);
    setEditIndex(i);
  };

  return (
    <div className="container">
      <h2>Fitness Log</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Exercise Name" value={formData.name} onChange={handleChange} required />
        <input name="sets" type="number" placeholder="Sets" value={formData.sets} onChange={handleChange} required />
        <input name="reps" type="number" placeholder="Reps" value={formData.reps} onChange={handleChange} required />
        <input name="weight" type="number" placeholder="Weight (kg)" value={formData.weight} onChange={handleChange} required />
        <button type="submit">{editIndex === null ? 'Add Exercise' : 'Update Exercise'}</button>
      </form>

      <ul>
        {exercises.map((ex, i) => (
          <li key={i}>
            <span>{ex.name} - {ex.sets} sets x {ex.reps} reps @ {ex.weight}kg</span>
            <button onClick={() => handleEdit(i)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FitnessLog;