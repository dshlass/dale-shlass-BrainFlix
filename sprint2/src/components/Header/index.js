import React from 'react';
import Navigation from './Navigation';
import Video from './Video';

//Video information passed down as props from App.js
class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <Navigation />
        <Video 
          poster={this.props.poster}
          duration={this.props.duration}
        />
      </header>
    );
  }
}

export default Header