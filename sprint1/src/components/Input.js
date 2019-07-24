import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <>
        <input className={this.props.class} type={this.props.type} name="search" placeholder={this.props.placeholder} image='.'/>
      </>
    );
  }
}

export default Input;
