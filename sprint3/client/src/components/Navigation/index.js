import React from 'react';
import logo from '../../assets/Logo/Logo-brainflix.svg';
import Button from '../Reusable/Button';
import Profile from '../Reusable/Profile';
import {Link} from 'react-router-dom';


class Navigation extends React.Component {
  render() {
    return (
      <header className='header'>
        <nav className='navigation'>
          <div className='navigation__logo-wrapper'> {/**Start of logo wrapper */}
            <Link to='/'>
              <img src={logo} className="navigation__logo" alt="Company logo that spells out Brainflix" />
            </Link>
          </div> {/**End of logo wrapper */}
          <input className='navigation__search' type='search' name="search" placeholder='Search'/>
          <div className='navigation__flex-wrapper'> {/**Start of button and profile wrapper */}
            <Link to='/upload'>
              <Button class={'buttons navigation__button'} display={'Upload'}/>
            </Link>
            <Profile class={'navigation__profile'} alt={'A picture of Mohan'}/>
          </div> {/**End of button and profile wrapper */}
        </nav>

      </header>
    );
  }
}

export default Navigation;