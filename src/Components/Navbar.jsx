import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import {ContextGlobal} from "./utils/global.context"

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ContextGlobal);

  const handleThemeChange = () => {
    toggleTheme(theme);
  };

  return (
    <nav className='{theme}'>
      
      <div id='links'>
        <Link to='/home'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/favs'>Favs</Link>
      
      </div>
      
      <button onClick={handleThemeChange} icon="/public/images/moon-solid.svg">Toggle theme</button>
      
    </nav>
  );
}

export default Navbar