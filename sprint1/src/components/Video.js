import React from 'react';
// import Navigation from './Navigation'
import poster from '../assets/Images/video-list-0.jpg'


class Video extends React.Component {
  render() {
    return (
      <div className="video">
        <video className='video__media' poster={poster}>
            Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    );
  }
}

export default Video