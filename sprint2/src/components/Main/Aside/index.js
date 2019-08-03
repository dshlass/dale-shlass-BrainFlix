import React from 'react';
import NextVideo from './NextVideo';

class Aside extends React.Component {

  render() {

    const {videoArray, match, getVideos} = this.props;

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
              match={match}
              getVideos={getVideos}
            />
          )       
        }
      </aside>
    );
  }
}

export default Aside;
