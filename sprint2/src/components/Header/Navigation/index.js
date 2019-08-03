import React from 'react';
import logo from '../../../assets/Logo/Logo-brainflix.svg';
import Profile from '../../Reusable/Profile';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {

  render() {
    return (
      <nav className='navigation'>
        <div className='navigation__logo-wrapper'> {/**Start of logo wrapper */}
          <Link to='/'>
            <img src={logo} className="navigation__logo" alt="Company logo that spells out Brainflix" />
          </Link>
        </div> {/**End of logo wrapper */}
        <input className='navigation__search' type='search' name="search" placeholder='Search' />
        <div className='navigation__flex-wrapper'> {/**Start of button and profile wrapper */}
          <Link to='/upload' className='buttons navigation__button'> 
              Upload
          </Link>
          <Profile class={'navigation__profile'} alt={'A picture of Mohan'}/>
        </div> {/**End of button and profile wrapper */}
      </nav>
    );
  }
}

export default Navigation;
