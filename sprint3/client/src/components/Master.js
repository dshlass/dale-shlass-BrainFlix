import React from "react";
import Navigation from "./Navigation";
import Video from "./Video";
import Main from "./Main";
import axios from "axios";

class Master extends React.Component {
  
  state = {
    isLoaded: false
  };

//Handles the like button on the Main video
likeButton = (event) => {
  event.preventDefault()
  
  let id = this.props.match.params.id;
  if (!this.props.match.params.id) {
    id = "1af0jruup5gu";
  }

  axios({
    method: "put",
    url: this.props.urlHandler("videos/" + id + "/like"),
    headers: {
      "content-type": "application/json"
    },
    data: {
      id: id
    }
  })
    .then(request => this.setState({mainVideo: request.data}))
    .catch(err => console.log(err));
  }
  //end of likeButton function
  
  //Request for the video list
  getVideos = id => {
    
    //handles the logo click
    if (!id) {
      id = "1af0jruup5gu";
    }

    axios
      .get(this.props.urlHandler("videos/" + id))
      .then(result => {
        if (result.status === 200) {
          this.setState({
            isLoaded: true,
            mainVideo: result.data
          });
        }
      })
      .catch(error => {
        this.setState({
          isLoaded: true,
          error
        });
      });
  }
  //end of getVideo function

  //Gets the default video when mounted
  componentDidMount() {
    this.getVideos("1af0jruup5gu");
  }
  
  //Gets the new video when another video is selected
  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getVideos(this.props.match.params.id);
    }
  }

  render() {
    const { mainVideo, isLoaded, error } = this.state;
    const {match, urlHandler} = this.props
    if (error) {
      return (
        <>
          <h1 className="loading-error">Error: {error.message}</h1>
          <p className="error-emoji">
            <span role="img" aria-label="cry-face emoji">
              &#128557;
            </span>
          </p>
        </>
      );
    } else if (!isLoaded) {
      return (
        <>
          <h1 className="loading-error">Loading...</h1>
          <div className="loader" />
        </>
      );
    } else
      return (
        <>
          <Navigation />

          <Video mainVideo={mainVideo}/>

          <Main
            mainVideo={mainVideo}
            urlHandler={urlHandler}
            match={match}
            getVideos={this.getVideos}
            likeButton={this.likeButton}
          />
        </>
      );
  }
}

export default Master;
