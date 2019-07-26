import React from 'react';
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import Aside from './Aside';


class Main extends React.Component {

  render() {
    return (
      <main className='main'>
        <section>
        <VideoInfo currentVideo={this.props.currentVideo}/>
        <Comments 
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
          value={this.props.value}
          
          commentsArray={this.props.commentArray} 

        />
        </section>
           <Aside videoArray={this.props.videoArray}/>
      </main>
    );
  }
}

export default Main;