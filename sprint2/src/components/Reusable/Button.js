import React from 'react';

//Button set as a resuable component. Class name is variable so it is styled within multiple sheets depending on where it is used
class Button extends React.Component {
  render() {
    return (
      <>
        <button 
          className={this.props.class} 
          onClick={this.props.placeholder}
        >
          {this.props.display}
        
        </button>
      </>
    );
  }
}

export default Button;
