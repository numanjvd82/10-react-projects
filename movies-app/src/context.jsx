import { useContext } from 'react';
import { createContext } from 'react';

const value = {
  movies: [],
  name: 'Hello',
};

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  return useContext(MovieContext);
};

export default MovieProvider;
