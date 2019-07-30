import React from 'react';
import './css/Master.scss';
import Header from './components/Header';
import {mainVideo, sideVideo} from './data/Data';
import Main from './components/Main';
// import axios from 'axios';
import testArray from './data/Api'



class App extends React.Component {

  //Importing sideVideo and mainVideo to the state to be passed down the tree to components
  state = {
    sideVideo,
    mainVideo,
    value: '',
    sideArray: []
  }


  //Sorts by date and falls back to index if the dates are the same. 
  sortFunction(input) {
    input.sort((a,b) => {
        if (a.date === b.date) {
          return (input.indexOf(a) - input.indexOf(b))
        } else {
          return (b.date-a.date)
        }
      }
    )
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
    if (sideVideo === []) {
      this.setState({sideArray: testArray});
    }
  }


  render() {
    this.componentDidMount();
    //Filters out the current video from the next video list that appears on the side
    let sideVideoToDisplay = testArray.filter(videos => 
      {return (mainVideo.title !== videos.title && mainVideo.channel !== videos.channel)}
    );

    //Passes down the sorted array as a prop to Comments.js
    let sortedComments = mainVideo.comments;
    this.sortFunction(sortedComments);
    console.log(this.state)
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
          commentArray={sortedComments} 
          
          videoArray = {sideVideoToDisplay}
        />
      </>
    );
  }
}

export default App;
