import React from 'react';
import likes from '../../../assets/Icons/SVG/Icon-likes.svg';
import views from '../../../assets/Icons/SVG/Icon-views.svg';

class VideoInfo extends React.Component {

  render() {
    
    //Props received from App.js and set to video for ease of use
    const video = this.props.currentVideo;
    
    const convertTimestamp = (input) => {
      let date = new Date(input.timestamp)
      return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`
    }

    return (
      <>
        <h1 className='video-info__title'>{video.title}</h1>
        <div className='video-info__info-wrapper'> {/**Start of video info wrapper */}
          <div className='video-info__channel-time'> {/**Start of video channel and time wrapper */}
            <h2 className='video-info__channel'>By {video.channel}</h2>
            <p className='video-info__timestamp'>{convertTimestamp(video)}</p>
          </div> {/**End of video channel and time wrapper */}
          <div className='video-info__like-view'> {/**Start of video likes and views wrapper */}
            <img className='video-info__logo' src={views} alt='An eye used to indicate the number of views'/> 
            <p className='video-info__views'>{video.views}</p>
            <img className='video-info__logo' src={likes} alt='A heart used to indicate the number of likes'/>
            <p className='video-info__likes'>{video.likes}</p>
          </div> {/**End of video likes and views wrapper */}
        </div> {/**End of video info wrapper */}
        <p className='video-info__description'>{video.description}</p>
        <p className='video-info__comment-count'>{video.comments.length} Comments</p> {/**Number of comments in the comment array */}
      </>
    );
  }
}

export default VideoInfo;