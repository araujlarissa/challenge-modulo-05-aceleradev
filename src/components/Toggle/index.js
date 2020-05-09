import React from 'react';

import './style.css';

const Toggle = ({ toggleTheme, theme }) => {
  return (
    <div className="toggle">
      <input className="toggle__switch" id="switch" type="checkbox" checked={theme === 'dark'} name="theme" onChange={toggleTheme} />
      <label className="toggle__label" htmlFor="switch"></label>
  </div>
  )
};

export default Toggle;
