import MovieCard from '../MovieCard/MovieCard';
import './MoviesWrapper.css';

const MovieWrapper = () => {
  return (
    <div className="movie-container">
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
};

export default MovieWrapper;
