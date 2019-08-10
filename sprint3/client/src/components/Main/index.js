import React from "react";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";
import Aside from "./Aside";

class Main extends React.Component {
  state = {
    isLoaded: false
  };

  sortFunction(input) {
    input.sort((a, b) => {
      if (a.timestamp === b.timestamp) {
        return input.indexOf(a) - input.indexOf(b);
      } else {
        return b.timestamp - a.timestamp;
      }
    });
  }

  componentDidMount() {
    let sortedComments = this.props.mainVideo.comments;
    this.sortFunction(sortedComments);

    this.setState({
      sortedComments: sortedComments,
      mainVideo: this.props.mainVideo,
      isLoaded: true
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.mainVideo.title !== prevProps.mainVideo.title || this.props.mainVideo.likes !== prevProps.mainVideo.likes) {
      let sortedComments = this.props.mainVideo.comments;
      this.sortFunction(sortedComments);
      this.setState({
        sortedComments: sortedComments,
        mainVideo: this.props.mainVideo,
        isLoaded: true
      });
    }
  }

  render() {
    let { isLoaded, mainVideo, sortedComments, sideVideos } = this.state;
    let { urlHandler, match } = this.props;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else
      return (
        <main className="main">
          <section className="section">
            {/**This section contains the current video's info and the generated comments */}
            {/**
             *VideoInfo Component
             * Passing down data from App.js to generate the current video information
             */}
            <VideoInfo 
              currentVideo={mainVideo} 
              match={match}
              likeButton={this.props.likeButton}
            />
            {/**
             *Comments Component
             * Receives functions from App.js to:
             * handle text changes inside input and
             * submit button
             * Passing down data from App.js to generate the comment section
             */}
            <Comments
              mainVideo={mainVideo}
              commentsArray={sortedComments}
              match={match}
              urlHandler={urlHandler}
              getVideos={this.props.getVideos}

              // handleDelete={handleDelete}
            />
            {/**
             *Aside Component
             * Passing down data from App.js to generate the list of next videos
             */}
          </section>
          <Aside
            urlHandler={urlHandler}
            mainVideo={mainVideo}
            videoArray={sideVideos}
            match={match}
            sideVideos={this.getsideVideos}
          />
        </main>
      );
  }
}

export default Main;
