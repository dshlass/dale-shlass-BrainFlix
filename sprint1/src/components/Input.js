import React from 'react';
import icon from '../assets/Icons/SVG/Icon-search.svg';

class Input extends React.Component {
  render() {
    return (
      <>
        <input className={this.props.class} type={this.props.type} name="search" placeholder={this.props.placeholder} src={icon}/>
      </>
    );
  }
}

export default Input;
