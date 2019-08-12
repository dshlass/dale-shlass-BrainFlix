import React from 'react';
import views from '../../../assets/Icons/SVG/Icon-views.svg';

class VideoInfo extends React.Component {

  state= {
    isLoaded: false
  }

  componentDidMount() {
    this.setState({
      video: this.props.currentVideo,
      isLoaded: true
    })
  }

  //updates component when the current video changes
  componentDidUpdate(prevProps) {
    if (this.props.currentVideo !== prevProps.currentVideo) {
    this.setState({video: this.props.currentVideo})    
    } 
  }

  //Converts the timestamp to the specified output
  convertTimestamp = (input) => {
      let date = new Date(input.timestamp)
      return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    }
  
  render() {
    const { video, isLoaded} = this.state;

    if (!isLoaded) {
      return (
        <>
          <h1 className="loading-error">Loading...</h1>
          <div className="loader" />
        </>
      );
    } else

    return (
      <>
        <h1 className='video-info__title'>{video.title}</h1>
        <div className='video-info__info-wrapper'> {/**Start of video info wrapper */}
          <div className='video-info__channel-time'> {/**Start of video channel and time wrapper */}
            <h2 className='video-info__channel'>By {video.channel}</h2>
            <p className='video-info__timestamp'>{this.convertTimestamp(video)}</p>
          </div> {/**End of video channel and time wrapper */}
          <div className='video-info__like-view'> {/**Start of video likes and views wrapper */}
            <img className='video-info__logo' src={views} alt='An eye used to indicate the number of views'/> 
            <p className='video-info__views'>{video.views}</p>
            <button className='video-info__logo video-info__likeButton' onClick={this.props.likeButton} aria-label='like video button'></button>
            <p className='video-info__likes'>{video.likes}</p>
          </div> {/**End of video likes and views wrapper */}
        </div> {/**End of video info wrapper */}
        <p className='video-info__description'>{video.description}</p>
        <p className='video-info__comment-count'>{video.comments.length} Comments</p> {/*Number of comments in the comment array*/}
      </>
    );
  }
}

export default VideoInfo;