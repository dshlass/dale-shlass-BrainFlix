import React from 'react';
import NextVideo from './NextVideo';

class Aside extends React.Component {
    
    videoArray = this.props.videoArray;
  
  render() {
    

    return (
      <section className='side-video'>
        <p className='side-video__title'>Next Video</p>
        {
          this.props.videoArray.map(video => <NextVideo key={video.id + video.title} title={video.title} channel={video.channel} image={video.image} />)
        }
      </section>
    );
  }
}

export default Aside;
