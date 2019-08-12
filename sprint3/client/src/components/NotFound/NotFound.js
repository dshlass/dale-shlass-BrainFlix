import React from "react";

//Button set as a resuable component. Class name is variable so it is styled within multiple sheets depending on where it is used
class NotFound extends React.Component {
  
  render() {
      return (
        <>
          <h1 className="loading-error">Error: {this.props.message}</h1>
          <p className="error-emoji">
            <span role="img" aria-label="shout-face emoji">
              &#129324;
            </span>
          </p>
        </>
      );
    }
}

export default NotFound;
