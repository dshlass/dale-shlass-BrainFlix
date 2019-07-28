import React from 'react';
import './css/Master.scss';
import Header from './components/Header';
import {sideVideo, mainVideo} from './data/Data';
import Main from './components/Main';

/**
 * import React from 'react';
import './css/Master.scss';
import Header from './components/Header';
import {sideVideo, mainVideo} from './data/Data';
import Main from './components/Main';

 */


class App extends React.Component {

  //Importing sideVideo and mainVideo to the state to be passed down the tree to components
  state = {
    sideVideo,
    mainVideo,
    value: ''
  }

  //Updates the value state when you type in the text area
  handleChange= (event) => {
    this.setState({value: event.target.value});
  }

  //displays the state value as an alert when you submit a comment
  handleSubmit= (event) => {
    event.preventDefault();
    alert('You have submitted a comment: ' + this.state.value);
  }

  render() {

    //Filters out the current video from the next video list that appears on the side
    let sideVideoToDisplay = sideVideo.filter(videos => 
      {return (mainVideo.title !== videos.title && mainVideo.channel !== videos.channel)}
    );

    return (
      <>
        {/**Current video information passed to the header */}
        <Header 
          poster={mainVideo.image}
          duration={mainVideo.duration}
        />
        
        {
          /**Functions to handle state passed to Comments.js
           * current video information passed to VideoInfo.js and Comments.js
           * next video information passed to NextVideo.js
          */
        }
        <Main 
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}

          currentVideo={mainVideo}
          commentArray={mainVideo.comments} 
          
          videoArray = {sideVideoToDisplay}
        />
      </>
    );
  }
}

export default App;
