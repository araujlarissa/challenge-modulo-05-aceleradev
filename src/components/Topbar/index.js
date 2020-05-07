import React from 'react';

import './style.css';

import { ReactComponent as LogoSvg } from '../../assets/img/logo.svg';

class Topbar extends React.Component {
	render() {
		return (
      <header className="topbar">
        <div className="container">
          <a href="/" className="topbar__logo">
            <LogoSvg alt="Logo Instagram" />
          </a>
        </div>
      </header>
    );
	}
}

export default Topbar;