import React from 'react';

class VideoControls extends React.Component {
  render() {
    return (
      <div className='controls'>
        <button className='controls__play' aria-label='Play button'></button>
        <div className='controls__progress'>
          <progress className='controls__progress--bar' max="500" value="0"> 0%</progress>
          <p className='controls__progress--duration'>0:00/{this.props.duration}</p>
        </div>
        <div className='controls__screen-vol'>
          <button className='controls__fullscreen' aria-label='Fullscreen button'></button>
          <button className='controls__volume' aria-label='Volume button'></button>
        </div>
      </div>
    );
  }
}

export default VideoControls;