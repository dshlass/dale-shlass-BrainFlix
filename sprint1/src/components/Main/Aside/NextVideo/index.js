import React from 'react';

class NextVideo extends React.Component {

  //Generated inside Aside using the next video array that was filtered in App.js to exclude the current video
  render() {
    return (
      <aside className='next-video'>
        <div className='next-video__image-wrapper'> {/**Start of video image wrapper */}
          <img src={this.props.image} className='next-video__image'  alt='Thumbnail of the video'/>
        </div> {/**End of video image wrapper */}
        <div className='next-video__info-wrapper'> {/**Start of video info wrapper */}
          <div className='next-video__title-container'> {/** Container for the title to display only two lines of the title when in mobile */}
            <h3 className='next-video__title'>{this.props.title}</h3>
          </div> {/**End of video title container */}
          <p className='next-video__channel'>{this.props.channel}</p>
        </div> {/**End of video info wrapper */}
      </aside>
    );
  }
}

export default NextVideo;
