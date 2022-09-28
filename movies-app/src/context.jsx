import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import useFetch from './useFetch';

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
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

  return (
    <MovieContext.Provider value={{ data, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export default MovieProvider;
