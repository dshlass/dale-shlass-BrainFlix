import React from 'react';
import VideoControls from './VideoControls'




//Poster and video duration props passed down from App.js for the current video playing
class Video extends React.Component {

  state = {
    isLoaded: false,
    play: false,
    mute: false
  }

playButton = (event) => {
    event.target.parentElement.parentElement.childNodes[0].play()
    this.setState({play: !this.state.play})

  if (this.state.play) {
      event.target.parentElement.parentElement.childNodes[0].pause()
  }
}

handleMute = (event) => {
  let target = event.target.parentElement.parentElement.parentElement.childNodes[0]
  target.volume=0;
}
handleFullscreen = (event) => {
  let target = event.target.parentElement.parentElement.parentElement.childNodes[0]
    target.requestFullscreen()
}



onPlay = (event) => {
  let durationInVideo = event.target.duration
  let roundedDuration = (Math.floor(durationInVideo))
  this.setState({duration: roundedDuration})
}

playVideo= (event) => {
  event.target.play()
this.setState({play: !this.state.play})

    if (this.state.play) {
      event.target.pause()
  }
}

handleProgress = (event) => {
    let timeInVideo = event.target.currentTime
    
    let roundedTime = (Math.floor(timeInVideo))

    let percentage = (event.target.currentTime/event.target.duration);
    
    this.setState({currentTime: roundedTime, percentage: percentage})
}

handleSlider = (event) => {
  let targetVolume = event.target.value 

  let video = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.childNodes[0]
  
    video.volume= (targetVolume/100);




}

componentDidMount() {
  this.setState({
    poster: this.props.poster,
    duration: this.props.duration,
    video: this.props.video,
    currentTime: 0,
    isLoaded: true
  })
}



  render() {

    const {isLoaded, video, duration, poster, percentage} = this.state

if (!isLoaded) {
      return (
        <>
          <h1 className="loading-error">Loading...</h1>
          <div className="loader" />
        </>
      );
}
    return (
      <div className="video">
        <video className='video__media' 
                poster={poster} 
                onClick={this.playVideo} 
                onTimeUpdate={this.handleProgress}
                onPlay={this.onPlay}
        >
              <source src={`${video}?api_key=dale`}
            type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
        </video>
        <VideoControls 
          duration={duration} 
          currentTime={this.state.currentTime} 
          percentage={percentage} 
          playButton={this.playButton}
          muteButton={this.handleMute}
          fullSreen={this.handleFullscreen}
          handleSlider={this.handleSlider}
        />

      </div>
    );
  }
}

export default Video