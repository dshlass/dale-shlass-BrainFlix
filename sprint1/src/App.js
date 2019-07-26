import React from 'react';
// import logo from './logo.svg';
import './css/App.scss';
import Header from './components/Header';
import {sideVideo, mainVideo} from './data/Data';
import Main from './components/Main';


class App extends React.Component {

  state = {
    sideVideo,
    mainVideo,
    value: ''
  }

  handleChange= (event) =>{
    this.setState({value: event.target.value});
  }

  handleSubmit= (event) => {
    alert('You have submitted a comment: ' + this.state.value);
    event.preventDefault();
  }

  


  render() {

    let sideVideoToDisplay = sideVideo.filter(videos => 
        
       {return (mainVideo.title !== videos.title && mainVideo.channel !== videos.channel)}
      );

    return (
      <>
        <Header 
          poster={mainVideo.image}
          duration={mainVideo.duration}
        />
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
