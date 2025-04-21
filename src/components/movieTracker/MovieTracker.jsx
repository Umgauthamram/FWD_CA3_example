import React, { useState } from 'react';
import './MovieTracker.css';

function MovieTracker() {
  const [formData, setFormData] = useState({
    title: '',
    year: '',
    status: 'To Watch',
  });

  const [movies, setMovies] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex === null) {
      setMovies([...movies, formData]);
    } else {
      const updatedMovies = movies.map((movie, index) =>
        index === editIndex ? formData : movie
      );
      setMovies(updatedMovies);
    }

    setFormData({ title: '', year: '', status: 'To Watch' });
    setEditIndex(null);
  };

  const handleEdit = (index) => {
    setFormData(movies[index]);
    setEditIndex(index);
  };

  return (
    <div className="tracker-container">
      <h1> Movie Tracker</h1>

      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="title"
          placeholder="Movie Title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="year"
          placeholder="Release Year"
          value={formData.year}
          onChange={handleChange}
          required
        />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="To Watch">To Watch</option>
          <option value="Watched">Watched</option>
        </select>

        <button type="submit">
          {editIndex === null ? 'Add Movie' : 'Update Movie'}
        </button>
      </form>

      <ul className="movie-list">
        {movies.map((movie, index) => (
          <li key={index} className="movie-item">
            <span>
              <strong>{movie.title}</strong> ({movie.year}) – {movie.status}
            </span>
            <button onClick={() => handleEdit(index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieTracker;
