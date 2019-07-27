import React from 'react';

class NextVideo extends React.Component {

  render() {
    return (
      <aside className='next-video'>
        <div className='next-video__image-wrapper'>
          <img src={this.props.image} className='next-video__image'  alt='Thumbnail of the video'/>
        </div>
        <div className='next-video__info-wrapper'>
          <div className='next-video__title-container'>
            <h3 className='next-video__title'>{this.props.title}</h3>
          </div>
          <p className='next-video__channel'>{this.props.channel}</p>
        </div>
      </aside>
    );
  }
}

export default NextVideo;
