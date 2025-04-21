import React, { useState } from 'react';
import './HabitTracker.css';

function HabitTracker() {
  const [formData, setFormData] = useState({ name: '', frequency: 'Daily', startDate: '' });
  const [habits, setHabits] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === null) setHabits([...habits, formData]);
    else setHabits(habits.map((h, i) => i === editIndex ? formData : h));
    setFormData({ name: '', frequency: 'Daily', startDate: '' });
    setEditIndex(null);
  };

  const handleEdit = (i) => {
    setFormData(habits[i]);
    setEditIndex(i);
  };

  return (
    <div className="container">
      <h2>Habit Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Habit Name" value={formData.name} onChange={handleChange} required />
        <select name="frequency" value={formData.frequency} onChange={handleChange}>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        <button type="submit">{editIndex === null ? 'Add Habit' : 'Update Habit'}</button>
      </form>

      <ul>
        {habits.map((h, i) => (
          <li key={i}>
            <span>{h.name} - {h.frequency} starting {h.startDate}</span>
            <button onClick={() => handleEdit(i)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitTracker;
