import React from "react";
import Navigation from "./Navigation";
import Video from "./Video";
import Main from "./Main";
import axios from "axios";

class Master extends React.Component {
  state = {
    isLoaded: false
  };

  urlHandler = endpoint => {
    const apiKey = "a74bc77e-a64a-4c16-94a1-ba5cb480ac2e";
    return `https://project-2-api.herokuapp.com/${endpoint}?api_key=${apiKey}`;
  };

  getVideos = id => {
    if (!id) {
      id = "1af0jruup5gu";
    }

    axios
      .get(this.urlHandler("videos/" + id))
      .then(result => {
        if (result.status === 200) {
          this.setState({
            isLoaded: true,
            mainVideo: result.data
          });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          isLoaded: true,
          error
        });
      });
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      this.getVideos(this.props.match.params.id);
    } else {
      this.getVideos("1af0jruup5gu");
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.getVideos(this.props.match.params.id);
    }
  }

  render() {
    const { mainVideo, isLoaded, error } = this.state;
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

          <Video poster={mainVideo.image} duration={mainVideo.duration} />

          <Main
            mainVideo={mainVideo}
            urlHandler={this.urlHandler}
            match={this.props.match}
            getVideos={this.getVideos}
          />
        </>
      );
  }
}

export default Master;
