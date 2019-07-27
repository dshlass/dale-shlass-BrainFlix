import React from 'react';
import logo from '../assets/Logo/Logo-brainflix.svg'
import Button from './Button';
import Profile from './Profile'


class Navigation extends React.Component {
  render() {
    return (
      <nav className='navigation'>
        <div className='navigation__logo-wrapper'>
          <a href='./index.html'>
            <img src={logo} className="navigation__logo" alt="logo" />
          </a>
        </div>
        <input className='navigation__search' type='search' name="search" placeholder='Search'/>
        <div className='navigation__flex-wrapper'>
          <Button class={'buttons navigation__button'} display={'Upload'}/>
          <Profile class={'navigation__profile'} alt={'A picture of Mohan'}/>
        </div>
      </nav>
    );
  }
}

export default Navigation;
