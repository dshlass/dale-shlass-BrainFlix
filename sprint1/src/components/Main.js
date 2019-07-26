import React from 'react';
import Comments from './Comments';
import Aside from './Aside';

class Main extends React.Component {
  render() {
    return (
      <main className='main'>
        <Comments 
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
          value={this.props.value}
        />
        <Aside />
      </main>
    );
  }
}

export default Main;