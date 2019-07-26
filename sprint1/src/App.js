import React from 'react';
// import logo from './logo.svg';
import './css/App.scss';
import Header from './components/Header';
import {sideVideo, mainVideo} from './data/Data';
import Main from './components/Main';


class App extends React.Component {

  state = {
    sideVideo,
    mainVideo
  }


  render() {
    return (
      <>
        <Header 
          poster={mainVideo.image}
          duration={mainVideo.duration}
        />
        <Main />
      </>
    );
  }
}

export default App;
