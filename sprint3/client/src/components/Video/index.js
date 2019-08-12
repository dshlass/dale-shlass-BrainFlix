import React from 'react';
import VideoControls from './VideoControls'

//Poster and video duration props passed down from App.js for the current video playing
class Video extends React.Component {

  state = {
    isLoaded: false,
    play: false,
    mute: false,
    videoWrapper: 'video',
    videoElement: 'video__media'
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
    target.volume = 0;
  }


  handleEscKey = () => {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
        this.setState({ 
        videoWrapper: 'video',
        videoElement: 'video__media'
      })
    }
     else  this.setState({ 
        videoWrapper: 'full-screen',
        videoElement: 'full-screen__media'
      })
  }

  handleFullscreen = (event) => {

    let videoContainer = event.target.parentElement.parentElement.parentElement
    
    document.addEventListener('fullscreenchange', this.handleEscKey);
    document.addEventListener('webkitfullscreenchange', this.handleEscKey);
    document.addEventListener('mozfullscreenchange', this.handleEscKey);
    document.addEventListener('MSFullscreenChange', this.handleEscKey);

    if (document.fullscreenElement === null) {
      videoContainer.requestFullscreen()
    } else {
      document.exitFullscreen()
    }
  }

  onEnded = () => {
    this.loadVideo()
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
      mainVideo: this.props.mainVideo,
      currentTime: 0,
      isLoaded: true
    })
  }

  loadVideo() {
    let video = document.querySelector('.video__media')
    video.load()
  }

  componentDidUpdate(prevProps) {
    if (this.props.mainVideo.duration!== prevProps.mainVideo.duration) {
        let video = document.querySelector('.video__media')
        video.load()
        this.setState({duration: this.props.mainVideo.duration, percentage: 0, play: false })
    }
  }

durationUpdate = () => {
  return !this.state.duration ? this.state.mainVideo.duration : this.state.duration
}

  render() {

    const {isLoaded, percentage, videoElement, videoWrapper} = this.state

    if (!isLoaded) {
      return (
        <>
          <h1 className="loading-error">Loading...</h1>
          <div className="loader" />
        </>
      );
    }
    return (
      <div className={videoWrapper}>
        <video className={videoElement} 
                poster={this.props.mainVideo.image}  //YES
                onClick={this.playVideo} 
                onTimeUpdate={this.handleProgress}
                onPlay={this.onPlay}
                // onEnded={this.onEnded}
        >
          <source src={`${this.props.mainVideo.video}?api_key=dale`}type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
        </video>
        <VideoControls 
          duration={this.durationUpdate()} 
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