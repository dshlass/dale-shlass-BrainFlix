import React from 'react';
import './css/Master.scss';
import Header from './components/Header';
// import {Switch, Route} from './data/Data';
import Main from './components/Main';
// import {Switch, Route} from 'react-router-dom'



class App extends React.Component {

  //Importing sideVideo and mainVideo to the state to be passed down the tree to components
  state = {
    value: '',
    isLoaded: false,
    mainVideo:[],
    sideVideos:[],
    sortedComments:[]
  }

  //Updates the value state when you type in the text area
  handleChange= (event) => {
    this.setState({value: event.target.value});
  }

  //displays a new post when submitted
  handleSubmit= (event) => {
    event.preventDefault();

    // if (this.state.value === '') {
    //   alert('You must submit a comment');
    // } else {
      
    //   mainVideo.comments.unshift(
    //     {
    //       name: 'Mohan Muruge',
    //       comment: this.state.value,
    //       date: new Date()
    //     }
    //   )
    //   this.setState(this.state)
    // }
    //Clears the textarea after submit is clicked
    this.setState({value: ''})
  }

  
  componentDidMount() {
    // this.setState(...this.props)
    // this.props.getVideos(this.props.url);
    // this.getVideos(this.props.url || this.props.match.params.id);
  }

  render() {
    
      // const   {match, sideVideos, mainVideo, sortedComments, videoSelection, getVideos} = this.props
      const   {sideVideos, mainVideo, sortedComments} = this.props

    // console.log(match)
    // console.log(this.state)
    // console.log(videoSelection)
    // console.log(getVideos);
    // console.log(url)
        
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
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}

          currentVideo={mainVideo}
          commentArray={sortedComments} 
          
          getVideos={this.getVideos}
          match={this.props.match}
          videoArray = {sideVideos}
          getSideVideos={this.getSideVideos}
        />
      </>
    );
  }
  
}

export default App;
