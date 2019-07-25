import React from 'react';

class VideoControls extends React.Component {
  render() {
    return (
      <div className='controls'>
      <img className='controls__play' src={require('../assets/Icons/SVG/Icon-play.svg')} alt='play button'/>
      <div className='controls__progress'>
        <progress className='controls__progress--bar' max="500" value="0"> 0%</progress>
        <p className='controls__progress--duration'>0:00/{this.props.duration}</p>
      </div>
      <div className='controls__screen-vol'>
        <img className='controls__fullscreen' src={require('../assets/Icons/SVG/Icon-fullscreen.svg')} alt='play button'/>
        <img className='controls__volume' src={require('../assets/Icons/SVG/Icon-volume.svg')} alt='play button'/>
      </div>
      
      </div>
    );
  }
}

export default VideoControls;