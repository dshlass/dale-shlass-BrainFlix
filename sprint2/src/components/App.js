import React from 'react';
import Header from './Header';
import Main from './Main';

class App extends React.Component {

  render() {
    
      const {
        sideVideos, 
        mainVideo, 
        sortedComments, 
        handleChange, 
        handleSubmit, 
        value, 
        match, 
        handleDelete } = this.props

    return (
      <>
        {/**Current video information passed to the header */}
        <Header 
          poster={mainVideo.image}
          duration={mainVideo.duration}
          getVideos={this.getVideos}
        />
        {
          /**Functions to handle state passed to Comments.js
           * current video information passed to VideoInfo.js and Comments.js
           * next video information passed to NextVideo.js
          */
        }
        <Main 
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={value}

          currentVideo={mainVideo}
          commentArray={sortedComments} 
          
          match={match}
          videoArray = {sideVideos}
          handleDelete={handleDelete}
        />
      </>
    );
  }
}

export default App;
