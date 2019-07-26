import React from 'react';
import Comments from './Comments';
import Aside from './Aside';

class Main extends React.Component {
  render() {
    return (
      <main className='main'>
        <Comments />
        <Aside />
      </main>
    );
  }
}

export default Main;