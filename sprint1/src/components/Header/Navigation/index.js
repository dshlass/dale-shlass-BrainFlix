import React from 'react';
import logo from '../../../assets/Logo/Logo-brainflix.svg';
import Button from '../../Reusable/Button';
import Profile from '../../Reusable/Profile';


class Navigation extends React.Component {
  render() {
    return (
      <nav className='navigation'>
        <div className='navigation__logo-wrapper'> {/**Start of logo wrapper */}
          <a href='./index.html'>
            <img src={logo} className="navigation__logo" alt="Company logo that spells out Brainflix" />
          </a>
        </div> {/**End of logo wrapper */}
        <input className='navigation__search' type='search' name="search" placeholder='Search'/>
        <div className='navigation__flex-wrapper'> {/**Start of button and profile wrapper */}
          <Button class={'buttons navigation__button'} display={'Upload'}/>
          <Profile class={'navigation__profile'} alt={'A picture of Mohan'}/>
        </div> {/**End of button and profile wrapper */}
      </nav>
    );
  }
}

export default Navigation;
