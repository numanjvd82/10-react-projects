import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useMovieContext } from '../../context';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const { search, handleSearch } = useMovieContext();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${sticky ? 'navbar sticky' : 'navbar'}`}>
      <div className="app-logo">Movie App</div>
      <div className="search">
        <input
          value={search}
          onChange={handleSearch}
          placeholder="Search for a movie"
          name="search"
          id="search"
        />
      </div>
    </nav>
  );
};

export default Navbar;
