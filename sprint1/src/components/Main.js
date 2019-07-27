import React from 'react';
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import Aside from './Aside';


class Main extends React.Component {

  render() {
    return (
      <main className='main'>
        <section className='section'> {/**This section contains the current video's info and the generated comments */}
        
        {
          /** 
          *VideoInfo Component 
          * Passing down data from App.js to generate the current video information
          */
        }
        <VideoInfo currentVideo={this.props.currentVideo}/>
        
        {
          /** 
          *Comments Component 
          * Receives functions from App.js to:
          * handle text changes inside input and
          * submit button
          * Passing down data from App.js to generate the comment section
          */
        }
        <Comments 
          handleSubmit={this.props.handleSubmit}
          handleChange={this.props.handleChange}
          value={this.props.value}
          commentsArray={this.props.commentArray} 
        />

        {
          /** 
          *Aside Component 
          * Passing down data from App.js to generate the list of next videos
          */
        }
        </section>
          <Aside videoArray={this.props.videoArray}/>
      </main>
    );
  }
}

export default Main;