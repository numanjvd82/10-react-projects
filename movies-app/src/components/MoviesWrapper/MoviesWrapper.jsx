import MovieCard from '../MovieCard/MovieCard';
import useFetch from '../../useFetch';
import './MoviesWrapper.css';
import { useEffect } from 'react';

const MovieWrapper = () => {
  const baseURL = `https://api.themoviedb.org/3/trending/all/day?api_key=bec32c4fdb55e1742e85e24a3adc6426`;
  const { data, loading, error, fetchData } = useFetch(baseURL);

  useEffect(() => {
    let controller = new AbortController();

    fetchData(controller);
    return () => {
      controller.abort();
      console.log('cleanup');
    };
  }, []);

  console.log(data.results);

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
