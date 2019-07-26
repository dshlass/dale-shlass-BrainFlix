import React from 'react';

class Aside extends React.Component {
  render() {
    return (
      <aside className='next-video'>
        <div className='next-video__image'>
          <img src={require('../assets/Images/video-list-1.jpg')} className='test'  alt='Thumbnail of the video'/>
        </div>
        <div className='next-video__info-wrapper'>
          <h3 className='next-video__title'>Title{this.props.title}</h3>
          <p className='next-video__channel'>Channel{this.props.channel}</p>
        </div>
      </aside>
    );
  }
}

export default Aside;
