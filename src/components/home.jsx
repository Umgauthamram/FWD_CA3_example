import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className=" justify-center items-center ">
      <button
        onClick={() => navigate('/movie')}
        className="bg-blue-500 text-white px-4 py-2 rounded "
      >
        MovieTracker
      </button>
      <button
        onClick={() => navigate('/event')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        EventPlanner
      </button>
      <button
        onClick={() => navigate('/fitness')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        FitnessLog
      </button>
      <button
        onClick={() => navigate('/habit')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        HabitTracker
      </button>
      <button
        onClick={() => navigate('/recipe')}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        RecipeBook
      </button>
    </div>
  );
}

export default Home;
