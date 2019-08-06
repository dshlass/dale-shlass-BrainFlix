import React from 'react';

class VideoControls extends React.Component {
  render() {
    return (
      <div className='controls'>
        <button className='controls__play' aria-label='Play button'></button>
        <div className='controls__progress'> {/**Start of progress wrapper */}
          <progress className='controls__progress--bar' max="500" value="0"> 0%</progress> {/**progress bar will progress when the video is played */}
          <p className='controls__progress--duration'>0:00/{this.props.duration}</p>  {/**Video duration will change when the video us played */}
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