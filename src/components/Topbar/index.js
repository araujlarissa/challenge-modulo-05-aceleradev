import React from 'react';

import './style.css';

import { ReactComponent as LogoSvg } from '../../assets/logoTitle.svg';

const Topbar = () =>  (
  <header className="topbar">
    <div className="topbar__container container">
      <a href="/" className="topbar__logo">
        <LogoSvg alt="Logo Contact" />
      </a>
    </div>
  </header>
);

export default Topbar;
