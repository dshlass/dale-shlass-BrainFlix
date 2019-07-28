import React from 'react';
import VideoControls from './VideoControls'

//Poster and video duration props passed down from App.js for the current video playing
class Video extends React.Component {
  render() {
    return (
      <div className="video">
        <video className='video__media' poster={this.props.poster}>
            Sorry, your browser doesn't support embedded videos.
        </video>
        <VideoControls duration={this.props.duration}/>
      </div>
    );
  }
}

export default Video