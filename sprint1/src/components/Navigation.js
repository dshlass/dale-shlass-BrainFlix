import React from 'react';
import Logo from './Logo'
import Button from './Button';
import Profile from './Profile'
import Input from './Input';


class Navigation extends React.Component {
  render() {
    return (
      <header className='navigation'>
        <Logo />
        <Input class={'navigation__search'} type={'search'} placeholder={'Search'}/>
        <div className='navigation__flex-wrapper'>
          <Button class={'buttons navigation__button'} display={'Upload'}/>
          <Profile class={'navigation__profile'} alt={'A picture of Mohan'}/>
        </div>
      </header>
    );
  }
}

export default Navigation;
