import React from 'react';

class VideoControls extends React.Component {
  
  state = { hover: false };

  volumeSlider = props => {
    if (!this.state.hover) return <input className='controls__volume-slider-hide' orient='vertical' type="range" min='0' max='100' />
    else return <input className='controls__volume-slider-show' orient='vertical' type="range" min='0' max='100' onChange={props.handleSlider}/>
  };

  hoverEnter = () => {
    this.setState({ hover: true });
  };

  hoverLeave = () => {
    this.setState({ hover: false});
  };

  handleTimes() {
    return this.props.currentTime < 10 ?  `0:0${this.props.currentTime}`: `0:${this.props.currentTime}`
  }

  handleDuration() {
    return this.props.duration === 10 ? `0:${this.props.duration}` : this.props.duration
  }

  render() {
    return (
      <div className='controls'>
        <button className='controls__play' aria-label='Play button' onClick={this.props.playButton}></button>
        <div className='controls__progress'> {/**Start of progress wrapper */}
          <progress className='controls__progress--bar' max="1" value={this.props.percentage || 0}>{this.props.percentage || 0}</progress> {/**progress bar will progress when the video is played */}
          <p className='controls__progress--duration'>{ this.handleTimes() || '0:00'}/{this.handleDuration()}</p>  {/**Video duration will change when the video us played */}
        </div> {/**End of progress bar */}
        <div className='controls__screen-vol'> {/**Start of full-screen and volume button wrapper */}
          <button className='controls__fullscreen' aria-label='Fullscreen button' onClick={this.props.fullSreen}></button>
            <div>
              
              <button className='controls__volume' 
                      aria-label='Volume button' 
                      onClick={this.props.muteButton} 
                      onMouseEnter={this.hoverEnter} 
                      onMouseLeave={this.hoverLeave}>
                        {
                          this.volumeSlider(this.props)
                        }
              </button>
            </div>
        </div> {/**End of full-screen and volume button wrapper */}
      </div>
    );
  }
}

export default VideoControls;