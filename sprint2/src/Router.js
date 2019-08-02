import React from 'react';
import './css/Master.scss';
import App from './App';
import axios from 'axios';
// import Upload from './components/Upload';

class Test extends React.Component {


  state ={
          isLoaded: false,
          sideVideos: [],
          mainVideo: [],
          sortedComments: [],
          value:''
        }

  sortFunction(input) {
    input.sort((a,b) => {
        if (a.timestamp === b.timestamp) {
          return (input.indexOf(a) - input.indexOf(b))
        } else {
          return (b.timestamp-a.timestamp)
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
    if (this.state.value === '') {
      alert('You must submit a comment');
    } else {
      
      this.postComment(this.state.value)

    }
    //Clears the textarea after submit is clicked
    this.getVideos(this.props.match.params.id)

  }


  postComment = (comment) => {
    let body = {
      name: `Dale`,
      comment: comment
    };

    axios({
      method: 'post',
      url: this.urlHandler('videos/' + this.props.match.params.id + '/comments'),
      contentType: 'application/json',
      data: body
    }).then( request => {

        let sortedComments = this.state.mainVideo
        // this.sortFunction(sortedComments);

        sortedComments.comments.unshift(request.data)
          this.setState({sortedComments: sortedComments.comments})
        //NEED TO SEND ANOTHER REQUEST. SPLIT UP MY AXIOS REQUESTS!!!
          this.getVideos(this.props.match.params.id)
         }).then(this.setState({value:''}))
    .catch(err => console.log(err))
  }


  handleDelete = (event) => {
    event.preventDefault();

    let targetId = event.currentTarget.parentElement.parentElement.parentElement.id
    axios.delete(this.urlHandler('videos/' + this.props.match.params.id + '/comments/' + targetId ))
         .then(req => {
                console.log(req)
          this.getVideos(this.props.match.params.id)

          })
         .catch(err => console.log(err))
      
  }



// Working
  getsideVideos = () => {
    axios.get(this.urlHandler('videos'))
         .then(req => {
                let sideVideoToDisplay = req.data.filter(videos => 
                {return (this.state.mainVideo.title !== videos.title && this.state.mainVideo.channel !== videos.channel)}
                );

          this.setState({
            isLoaded: true,
            sideVideos: sideVideoToDisplay
          })
          })
         .catch(err => console.log(err))
      
  }

// Working
  getVideos = (id) => {
            axios.get(this.urlHandler('videos/'+ id) ) 
            .then(
              result => { 
            //Passes down the sorted array as a prop to Comments.js
            let sortedComments = result.data.comments;
            this.sortFunction(sortedComments);
                this.setState({
                  isLoaded: true,
                  mainVideo: result.data,
                  sortedComments: sortedComments
                })
                 
                this.getsideVideos()
                  
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
    if (!this.props.match.params.id) {
      this.getVideos('1af0jruup5gu')
    } else {
      this.getVideos(this.props.match.params.id)
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getVideos(this.props.match.params.id)
    }
    // else if (this.state.value !== prevState.value) {
    //     console.log('yes')
    // }
  }
  
  render() {

    const { match } = this.props
    const {error, isLoaded, sideVideos, mainVideo, sortedComments } = this.state

  // Error handing 
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    
    //This sets the default match.params.id when the page loads to allow for the logo to go back to the default video
    if (!match.params.id) {
      match.params.id = '1af0jruup5gu';
    }

    return(
        <App match={match.params} 
            sideVideos={sideVideos} 
            mainVideo={mainVideo} 
            sortedComments={sortedComments} 
            urlHandler={this.urlHandler}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            value={this.state.value}
            getVideos={this.getVideos}
            handleDelete={this.handleDelete}
        />      
    )
    }
  }
}

  export default Test





// class App extends React.Component {

//   //Importing sideVideo and mainVideo to the state to be passed down the tree to components
//   state = {
//     value: '',
//     isLoaded: false,
//   }


//   //Sorts by date and falls back to index if the dates are the same. 
//   sortFunction(input) {
//     input.sort((a,b) => {
//         if (a.date === b.date) {
//           return (input.indexOf(a) - input.indexOf(b))
//         } else {
//           return (b.date-a.date)
//         }
//       }
//     )
//   }

//   //Updates the value state when you type in the text area
//   handleChange= (event) => {
//     this.setState({value: event.target.value});
//   }

//   //displays a new post when submitted
//   handleSubmit= (event) => {
//     event.preventDefault();

//     // if (this.state.value === '') {
//     //   alert('You must submit a comment');
//     // } else {
      
//     //   mainVideo.comments.unshift(
//     //     {
//     //       name: 'Mohan Muruge',
//     //       comment: this.state.value,
//     //       date: new Date()
//     //     }
//     //   )
//     //   this.setState(this.state)
//     // }
//     //Clears the textarea after submit is clicked
//     this.setState({value: ''})
//   }

//   getVideos() {
//     Promise.all([
//             axios.get(this.urlHandler('videos')),
//             axios.get(this.urlHandler('videos/1af0jruup5gu') ) 
//             ])
//             .then(
//               result => { 
//                 // console.log(result[1].data)
//                 // console.log(result[0].data)

//               let sideVideoToDisplay = result[0].data.filter(videos => 
//                 {return (result[1].data.title !== videos.title && result[1].data.channel !== videos.channel)}
//                 );

//             //Passes down the sorted array as a prop to Comments.js
//             let sortedComments = result[1].data.comments;
//             this.sortFunction(sortedComments);

                
//                 this.setState({
//                   isLoaded: true,
//                   sideVideos: sideVideoToDisplay,
//                   mainVideo: result[1].data,
//                   sortedComments: sortedComments,
//                   url: this.props.match.params.id
//                 })
//               }
//             )
//             .catch(error => {
//               console.log(error)
//           this.setState({
//           isLoaded: true,
//           error
//           })
//         })
//   }

//   urlHandler = (endpoint) =>{
//     const apiKey = 'a74bc77e-a64a-4c16-94a1-ba5cb480ac2e';
//     return `https://project-2-api.herokuapp.com/${endpoint}?api_key=${apiKey}`
//   }

//   componentDidMount() {
//     this.getVideos();
//   }

//   render() {
    
//     const { error, isLoaded, sideVideos, mainVideo, sortedComments} = this.state;
    
//     if (error) {
//       return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//       return <div>Loading...</div>;
//     } else {

//     console.log(this.props.match)
//     console.log(this.state)
        
//     return (



//       <>
//         {/**Current video information passed to the header */}
//         <Header 
//           poster={mainVideo.image}
//           duration={mainVideo.duration}
//         />
        
//         {
//           /**Functions to handle state passed to Comments.js
//            * current video information passed to VideoInfo.js and Comments.js
//            * next video information passed to NextVideo.js
//           */
//         }
//         <Main 
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//           value={this.state.value}

//           currentVideo={mainVideo}
//           commentArray={sortedComments} 
          
//           match={this.props.match}
//           videoArray = {sideVideos}
//         />
//       </>
//     );
//   }
//   }
// }

// export default App;
