import React from 'react';
import './css/Master.scss';
import Header from './components/Header';
// import {Switch, Route} from './data/Data';
import Main from './components/Main';
// import {Switch, Route} from 'react-router-dom'



class App extends React.Component {

  //Importing sideVideo and mainVideo to the state to be passed down the tree to components
  state = {
    sortedComments:[]
  }

  // //Updates the value state when you type in the text area
  // handleChange= (event) => {
  //   this.setState({value: event.target.value});
  // }

  // //displays a new post when submitted
  // handleSubmit= (event) => {
  //   event.preventDefault();
  //   if (this.state.value === '') {
  //     alert('You must submit a comment');
  //   } else {
      
  //     this.postComment(this.state.value)

  //   }
  //   //Clears the textarea after submit is clicked
  //   this.setState({value: ''})
  // }


  // postComment = (comment) => {
  //   let body = {
  //     name: `Dale`,
  //     comment: comment
  //   };

  //   axios({
  //     method: 'post',
  //     url: this.props.urlHandler('videos/' + this.state.match.id + '/comments'),
  //     contentType: 'application/json',
  //     data: body
  //   }).then( request => {
  //       console.log(request.data)

  //       let sortedComments = this.state.mainVideo
  //       // console.log(sortedComments.comments)
  //       // this.sortFunction(sortedComments);

  //       this.props.sortedComments.comments.unshift(request.data)
  //       console.log(sortedComments.comments)
  //         this.setState({sortedComments: sortedComments.comments})

  //       //NEED TO SEND ANOTHER REQUEST. SPLIT UP MY AXIOS REQUESTS!!!

  //        })
  //   .catch(err => console.log(err))
  // }


  
  // componentDidMount() {
  //   this.setState({sortedComments: this.props.sortedComments,match:this.props.match})
  // }

  render() {
    
      // const   {match, sideVideos, mainVideo, sortedComments, videoSelection, getVideos} = this.props
      const   {sideVideos, mainVideo, sortedComments, handleChange, handleSubmit, value, match} = this.props

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
          
          getVideos={this.getVideos}
          match={match}
          videoArray = {sideVideos}
          getSideVideos={this.getSideVideos}
        />
      </>
    );
  }
  
}

export default App;
