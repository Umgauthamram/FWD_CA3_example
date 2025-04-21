import React from 'react';
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import MovieTracker from './components/movieTracker/movieTracker';
import EventPlanner from './components/EventPlanner/EventPlanner';
import FitnessLog from './components/FitnessLog/FitnessLog';
import HabitTracker from './components/HabitTracker/HabitTracker';
import RecipeBook from './components/RecipeBook/RecipeBook';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/movie" element={<MovieTracker />} />
      <Route path="/event" element={<EventPlanner />} />
      <Route path="/fitness" element={<FitnessLog/>} />
      <Route path="/habit" element={<HabitTracker/>} />
      <Route path="/recipe" element={<RecipeBook/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
