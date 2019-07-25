import React from 'react';
import VideoControls from './VideoControls'


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