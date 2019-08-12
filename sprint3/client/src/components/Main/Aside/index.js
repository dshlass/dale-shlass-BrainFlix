import React from "react";
import NextVideo from "./NextVideo";
import axios from "axios";

class Aside extends React.Component {
  state = {
    isLoaded: false
  };

  //request for the side videos array
  getSideVideos = () => {
    axios.get(this.props.urlHandler("videos"))
    .then(result => {
      if (result.status === 200) {
        this.setState({
          isLoaded: true,
          sideVideos: result.data
        });
      }
    })
    .catch(error =>
      this.setState({
        isLoaded: true,
        error
      })
    );
  }
  //end of the getSideVideos function

  //Filters the matching video out of the sideVideo array each time the url changes
  sideVideoToDisplay() {
    if (this.props.match.params.id) {
      return this.state.sideVideos.filter(videos => {
        return this.props.match.params.id !== videos.id;
      });
    } else
      return this.state.sideVideos.filter(videos => {
        return "1af0jruup5gu" !== videos.id;
      });
  }

  //only makes a single call to the server once the component mounts
  componentDidMount() {
    this.getSideVideos();
  }

  render() {
    const { isLoaded, error } = this.state;

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
        <aside className="side-video">
          <p className="side-video__title">Next Video</p>
          {/**This generates the list of videos that are next to play */
          this.sideVideoToDisplay().map(video => (
            <NextVideo
              key={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
              id={video.id}
            />
          ))}
        </aside>
      );
  }
}

export default Aside;
