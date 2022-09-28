import MovieCard from '../MovieCard/MovieCard';
import useFetch from '../../useFetch';
import './MoviesWrapper.css';
import { useContext, useEffect } from 'react';
import { useMovieContext } from '../../context';

const MovieWrapper = () => {
  const { data, loading, error } = useMovieContext();

  if (loading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="movie-container">
        {data?.results?.map((movie) => {
          return <MovieCard key={movie.id} {...movie} />;
        })}
      </div>
    </>
  );
};

export default MovieWrapper;
