import React from 'react';

class VideoControls extends React.Component {
  
  
  state = { hover: false };

  volumeSlider = props => {
    if (!this.state.hover) {
      return <input className='controls__volume-slider-hide' orient='vertical' type="range" min='0' max='100' />
     } 
    else {
      return <input className='controls__volume-slider-show' orient='vertical' type="range" min='0' max='100' onChange={this.props.handleSlider}/>
    }
  };

  hoverEnter = () => {
    this.setState({ hover: true });
  };

  hoverLeave = () => {
    this.setState({ hover: false});
  };




  handleTimes() {
    if (this.props.currentTime < 10) {
      return `0:0${this.props.currentTime}`
    }
    else return `0:${this.props.currentTime}`
  }

  render() {
    return (
      <div className='controls'>
        <button className='controls__play' aria-label='Play button' onClick={this.props.playButton}></button>
        <div className='controls__progress'> {/**Start of progress wrapper */}
          <progress className='controls__progress--bar' max="1" value={this.props.percentage}>{this.props.percentage}</progress> {/**progress bar will progress when the video is played */}
          <p className='controls__progress--duration'>{ this.handleTimes() || '0:00'}/{this.props.duration}</p>  {/**Video duration will change when the video us played */}
        </div> {/**End of progress bar */}
        <div className='controls__screen-vol'> {/**Start of full-screen and volume button wrapper */}
          <button className='controls__fullscreen' aria-label='Fullscreen button' onClick={this.props.fullSreen}></button>
            <div>
              
              <button className='controls__volume' 
                      aria-label='Volume button' 
                      onClick={this.props.muteButton} 
                      onMouseEnter={this.hoverEnter} 
                      onMouseLeave={this.hoverLeave}>
                        {/* <input className='controls__volume-slider' 
                                orient='vertical'
                                type="range" 
                                min='0' 
                                max='100' 
                        >
                        </input> */
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