import React from 'react';
import './css/Master.scss';
import Header from './components/Header';
// import {mainVideo} from './data/Data';
import Main from './components/Main';
import axios from 'axios';


class App extends React.Component {

  //Importing sideVideo and mainVideo to the state to be passed down the tree to components
  state = {
    value: '',
    isLoaded: false,
    targetId: '1af0jruup5gu'
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



  // shouldComponentUpdate(props, nextState) {
  //      return (nextState !== this.state.isLoaded)     
        
  // }

  getVideos() {
    Promise.all([
            axios.get(this.urlHandler('videos')),
            axios.get(this.urlHandler('videos/'+ this.state.targetId)) 
            ])
            .then(
              result => { 
                // console.log(result[1].data)
                // console.log(result[0].data)
                this.setState({
                  isLoaded: true,
                  testArray: result[0].data,
                  mainVideo: result[1].data
                })
              }
            )
            .catch(error => {
              console.log(error)
          this.setState({
          isLoaded: true,
          error
          })
        })
  }

  urlHandler = (endpoint) =>{
    const apiKey = 'a74bc77e-a64a-4c16-94a1-ba5cb480ac2e';
    return `https://project-2-api.herokuapp.com/${endpoint}?api_key=${apiKey}`
  }

  componentDidMount() {
    this.getVideos();
  }

  handleVideoSelection = (event) => {
    this.setState({targetId: event.currentTarget.id, isLoaded:false});
    this.getVideos();
  }

  render() {
    
    const { error, isLoaded, testArray, mainVideo } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {


    // this.componentDidMount()
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
          
          handleVideoSelection = {this.handleVideoSelection}
          videoArray = {sideVideoToDisplay}
        />
      </>
    );
  }
  }
}

export default App;
