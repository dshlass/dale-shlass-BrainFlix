import React from 'react';
import Logo from './Logo'
import Button from './Button';
import Profile from './Profile'
import Input from './Input';


class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <Logo />
        <Input class={'header__search'} type={'search'} placeholder={'Search'}/>
        <div className='header__flex-wrapper'>
          <Button class={'buttons header__button'} display={'Upload'}/>
          <Profile class={'header__profile'} alt={'A picture of Mohan'}/>
        </div>
      </header>
    );
  }
}

export default Header;
