import React from 'react';
import likes from '../assets/Icons/SVG/Icon-likes.svg';
import views from '../assets/Icons/SVG/Icon-views.svg';


class VideoInfo extends React.Component {

  render() {

    const video = this.props.currentVideo;

    return (
      <>
        <h1 className='video__title'>{video.title}</h1>
        <div className='video__info-wrapper'>
          <div className='video__channel-time'>
            <h2 className='video__channel'>By {video.channel}</h2>
            <p className='video__timestamp'>{video.timestamp}</p>
          </div>
          <div className='video__like-view'>
            <img className='video__logo' src={views} alt='video views'/>
            <p className='video__views'>{video.views}</p>
            <img className='video__logo' src={likes} alt='video likes'/>
            <p className='video__likes'>{video.likes}</p>
          </div>
        </div>
        <p className='video__description'>{video.description}</p>
        <p className='video__comment-count'>{video.comments.length} Comments</p>

      </>
    );
  }
}

export default VideoInfo;


// title: 'BMX Rampage: 2018 Highlights',
//     description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
//     channel: 'Red Cow',
//     image: require('../assets/Images/video-list-0.jpg'),
//     views: '1,001,023',
//     likes: '110,985',
//     duration: '0.42',
//     video: '',
//     timestamp: '12/18/2018',
