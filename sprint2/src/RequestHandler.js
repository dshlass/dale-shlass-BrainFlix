import React from 'react';
import './css/Master.scss';
import App from './components/App';
import axios from 'axios';

class RequestHandler extends React.Component {

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

  //Function to post comments
  postComment = (comment) => {
    
    let body = {
      name: `Bill Murray`,
      comment: comment
    };

    axios({
      method: 'post',
      url: this.urlHandler('videos/' + this.props.match.params.id + '/comments'),
      contentType: 'application/json',
      data: body
    }).then( request => {

        let sortedComments = this.state.mainVideo

        sortedComments.comments.unshift(request.data)
          this.setState({
            sortedComments: sortedComments.comments
            })

          this.getVideos(this.props.match.params.id)

         })
    .catch(err => console.log(err))
  }

  handleDelete = (event) => {
    event.preventDefault();

    let targetId = event.currentTarget.parentElement.parentElement.parentElement.id
    axios.delete(this.urlHandler('videos/' + this.props.match.params.id + '/comments/' + targetId ))
         .then(req => {
            if(req && req.status === 200){
              this.getVideos(this.props.match.params.id)
            }
          })
         .catch(err => console.log(err))
  }

  getVideos = (id) => {
    Promise.all([
            axios.get(this.urlHandler('videos')),
            axios.get(this.urlHandler('videos/' + id) ) 
            ])
            .then(result => { 
                if (result && result[0].status === 200 && result[1].status === 200){
                let sortedComments = result[1].data.comments;
                this.sortFunction(sortedComments);

                let sideVideoToDisplay = result[0].data.filter(videos => 
                  {
                    return (result[1].data.title !== videos.title && result[1].data.channel !== videos.channel)
                  }
                );

                this.setState({
                  isLoaded: true,
                  mainVideo: result[1].data,
                  sortedComments: sortedComments,
                  sideVideos: sideVideoToDisplay,
                  value: ''
                })
              }
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
    } 
    else {
      this.getVideos(this.props.match.params.id)
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getVideos(this.props.match.params.id)
    }
  }
  
  render() {

    const { match } = this.props
    const {error, isLoaded, sideVideos, mainVideo, sortedComments } = this.state

  // Error handing 
    if (error) {
      return (
        <>
          <h1 className='loading-error'>Error: {error.message}</h1>
          <p className='error-emoji'>
            <span role='img' aria-label='cry-face emoji'>&#128557;</span>
          </p>
        </>
      );
    } else if (!isLoaded) {
      return (
        <>
          <h1 className='loading-error'>Loading...</h1>
          <div className='loader'></div>
        </>
      );
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

  export default RequestHandler


