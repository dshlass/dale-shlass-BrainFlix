import React from 'react';
import scrubber from '../../../assets/Icons/SVG/Icon-scrubber-control.svg'

class VideoControls extends React.Component {
  
  state = { hover: false };

//creates the progress bar with a moving scrubber
  progressBar = (props) => {
    let progressIcon = {
      height: '20px',
      width: '20px',
      position: 'absolute',
      left: `${props.percentage*100-1}%`,
      top: '-5px',
      marginright: '16px',
    }

    let progressBar = {
      backgroundColor:'#0095FF',
      height: '6px',
      borderRadius: '4px',
      width: `${props.percentage*100}%`
      }

    return(
      <div style={progressBar}>
          <img style={progressIcon} src={scrubber} alt='scrubber'/>
      </div>
    )
  }

  //hover states for the volume slider
  volumeSlider = props => {
    if (!this.state.hover) return <input className='controls__volume-slider-hide' orient='vertical' type="range" min='0' max='100' />
    else return <input className='controls__volume-slider-show' orient='vertical' type="range" min='0' max='100' onChange={props.handleSlider}/>
  };

  //hover state control for volume slider
  hoverEnter = () => {
    this.setState({ hover: true });
  };

  //hover state control for volume slider
  hoverLeave = () => {
    this.setState({ hover: false});
  };

  //Updates the timestamp during video progression
  handleTimes() {
    return this.props.currentTime < 10 ?  `0:0${this.props.currentTime}`: `0:${this.props.currentTime}`
  }

  //updates the video duration when the video plays
  handleDuration() {
    return this.props.duration === 10 ? `0:${this.props.duration}` : this.props.duration
  }

  render() {
    return (
      <div className='controls'>
        <button className='controls__play' aria-label='Play button' onClick={this.props.playButton}></button>
        <div className='controls__progress'> 
          <div className='controls__progress--bar'>
            {this.progressBar(this.props)} {/**This is the scrubber bar that returned from above */}
          </div>

          {/**progress bar will progress when the video is played */}
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