import React, { useState } from 'react';
import './EventPlanner.css';

function EventPlanner() {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    type: 'Birthday',
  });

  const [events, setEvents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === null) {
      setEvents([...events, formData]);
    } else {
      const updatedEvents = events.map((event, index) =>
        index === editIndex ? formData : event
      );
      setEvents(updatedEvents);
    }

    setFormData({ name: '', date: '', type: 'Birthday' });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(events[index]);
    setEditIndex(index);
  };

  return (
    <div className="event-container">
      <h1>Event Planner</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Event Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Birthday">Birthday</option>
          <option value="Wedding">Wedding</option>
          <option value="Conference">Conference</option>
        </select>

        <button type="submit">
          {editIndex === null ? 'Add Event' : 'Update Event'}
        </button>
      </form>

      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index} className="event-item">
            <span>
              <strong>{event.name}</strong> - {event.date} ({event.type})
            </span>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventPlanner;
