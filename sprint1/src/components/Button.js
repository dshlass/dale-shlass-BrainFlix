import React from 'react';

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
