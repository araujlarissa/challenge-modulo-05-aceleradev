import React, { useEffect } from 'react';
import usePersistedState from '../../utils/usePersistedState';

import { changeColors } from '../../utils/changeColors';

import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

import Toggle from '../Toggle';

import './style.css';

const Topbar = () => {
  const [theme, setTheme] = usePersistedState('theme contacts', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light); 
  }

  useEffect(() => {
    changeColors(theme);
  }, [theme]);

  return (
  <header className="topbar">
    <div className="topbar__container container">
      <a href="/" className="topbar__logo">
        <img src={theme.logo} alt="Logo Contact" />
      </a>

      <div className="topbar__toggle">
        <Toggle toggleTheme={toggleTheme} />
      </div>
    </div>
  </header>
);}

export default Topbar;
