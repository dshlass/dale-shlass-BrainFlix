import React from "react";
import VideoInfo from "./VideoInfo";
import Comments from "./Comments";
import Aside from "./Aside";

class Main extends React.Component {
  state = {
    isLoaded: false
  };

  //function to sort the comments
  sortFunction(input) {
    input.sort((a, b) => {
      if (a.timestamp === b.timestamp) {
        return input.indexOf(a) - input.indexOf(b);
      } else {
        return b.timestamp - a.timestamp;
      }
    });
  }

  //setting the state of the component once the props are received
  componentDidMount() {
    let sortedComments = this.props.mainVideo.comments;
    this.sortFunction(sortedComments);

    this.setState({
      sortedComments: sortedComments,
      mainVideo: this.props.mainVideo,
      isLoaded: true
    });
  }

  //re-renders the page if the title of the video or the number of likes changes
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
          <section className="section"> {/**Start of the section containing VideoInfo and Comments */}

            <VideoInfo 
              currentVideo={mainVideo} 
              likeButton={this.props.likeButton}
            />

            <Comments
              mainVideo={mainVideo}
              commentsArray={sortedComments}
              match={match}
              urlHandler={urlHandler}
              getVideos={this.props.getVideos}
            />
          </section> {/**End of the section containing VideoInfo and Comments */}

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
