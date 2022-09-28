import { useState } from 'react';
import { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

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
  });

  return (
    <nav className={`${sticky ? 'navbar sticky' : 'navbar'}`}>
      <div className="app-logo">Movie App</div>
      <div className="search">
        <input type="text" name="search" id="search" placeholder="Search" />
      </div>
    </nav>
  );
};

export default Navbar;
