import React from 'react';
import VideoControls from './VideoControls'




//Poster and video duration props passed down from App.js for the current video playing
class Video extends React.Component {

  state = {
    isLoaded: false,
    play: false
  }

playButton = (event) => {
    event.target.parentElement.parentElement.childNodes[0].play()

    let durationInVideo = event.target.duration
    let roundedDuration = (Math.floor(durationInVideo))

    this.setState({play: !this.state.play, duration: roundedDuration})

  if (this.state.play) {
      event.target.parentElement.parentElement.childNodes[0].pause()
  }
}

handleMute = (event) => {

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
        >
              <source src={`${video}?api_key=dale`}
            type="video/mp4"></source>
            Sorry, your browser doesn't support embedded videos.
        </video>
        <VideoControls duration={duration} currentTime={this.state.currentTime} percentage={percentage} playButton={this.playButton}/>
      </div>
    );
  }
}

export default Video