import React from 'react';

import './animation.css';
import './style.css';

import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

const Loading = () => (
  <div className="loading"> 
    <div className="loading__thumb">
      <LogoSvg alt="Logo Contact" />
    </div> 
    
    <div id="escapingBallG">
      <div id="escapingBall_1" className="escapingBallG"></div>
    </div>
  </div>
);

export default Loading;
