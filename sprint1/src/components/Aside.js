import React from 'react';
import SideVideo from './SideVideo';

class Aside extends React.Component {
    
    videoArray = this.props.videoArray;
  
  render() {
    

    return (
      <section className='side-video'>
        {
          this.props.videoArray.map(video => <SideVideo title={video.title} channel={video.channel} image={video.image} />)
        }
      </section>
    );
  }
}

export default Aside;
