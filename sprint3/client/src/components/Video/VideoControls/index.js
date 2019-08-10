import React from 'react';

class VideoControls extends React.Component {

  handleTimes() {
    if (this.props.currentTime < 10) {
      return `0:0${this.props.currentTime}`
    }
    else return `0:${this.props.currentTime}`
  }

  handleDuration() {
    return this.props.duration < 60 ? `0:${this.props.duration}` : `0:00`
  }

  render() {
    return (
      <div className='controls'>
        <button className='controls__play' aria-label='Play button' onClick={this.props.playButton}></button>
        <div className='controls__progress'> {/**Start of progress wrapper */}
          <progress className='controls__progress--bar' max="1" value={this.props.percentage}>{this.props.percentage}</progress> {/**progress bar will progress when the video is played */}
          <p className='controls__progress--duration'>{ this.handleTimes() || '0:00'}/{this.handleDuration()}</p>  {/**Video duration will change when the video us played */}
        </div> {/**End of progress bar */}
        <div className='controls__screen-vol'> {/**Start of full-screen and volume button wrapper */}
          <button className='controls__fullscreen' aria-label='Fullscreen button'></button>
          <button className='controls__volume' aria-label='Volume button'></button>
        </div> {/**End of full-screen and volume button wrapper */}
      </div>
    );
  }
}

export default VideoControls;