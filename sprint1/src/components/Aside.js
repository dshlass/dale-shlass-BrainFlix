import React from 'react';
import NextVideo from './NextVideo';

class Aside extends React.Component {
  render() {
    
    //Desrtucturing the received props.
    const {videoArray} = this.props;

    return (
      <section className='side-video'>
        <p className='side-video__title'>Next Video</p>
        { /**This generates the list of videos that are next to play */
          videoArray.map(video => <NextVideo key={video.id + video.title} title={video.title} channel={video.channel} image={video.image} />)
        }
      </section>
    );
  }
}

export default Aside;
