import React from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg'

class Logo extends React.Component {
  render() {
    return (
      <div className='navigation__logo-wrapper'>
        <a href='./index.html'>
          <img src={logo} className="navigation__logo" alt="logo" />
        </a>
        
      </div>
    );
  }
}

export default Logo;
