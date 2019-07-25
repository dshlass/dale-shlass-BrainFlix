import React from 'react';
import Navigation from './Navigation';
import Video from './Video';



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