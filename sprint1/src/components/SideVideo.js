import React from 'react';

class SideVideo extends React.Component {
  render() {
    return (
      
      <aside className='next-video'>
        <div className='next-video__image'>
          <img src={this.props.image} className='test'  alt='Thumbnail of the video'/>
        </div>
        <div className='next-video__info-wrapper'>
          <h3 className='next-video__title'>{this.props.title}</h3>
          <p className='next-video__channel'>{this.props.channel}</p>
        </div>
      </aside>
    );
  }
}

export default SideVideo;
