import React from 'react';
import NextVideo from './NextVideo';
// import axios from 'axios';







class Aside extends React.Component {

  render() {
    // this.getRequest();

    //Desrtucturing the received props.
    const {videoArray, handleVideoSelection} = this.props;
    // console.log(videoArray)

    return (
      <aside className='side-video'>
        <p className='side-video__title'>Next Video</p>
        { /**This generates the list of videos that are next to play */
          videoArray.map(video => 
              <NextVideo 
                key={video.id} 
                title={video.title} 
                channel={video.channel} 
                image={video.image} 
                id={video.id} 
                handleVideoSelection={handleVideoSelection}
              />
            )       
        }
      </aside>
    );
  }
}

export default Aside;
