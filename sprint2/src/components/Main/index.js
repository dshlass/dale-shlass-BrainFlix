import React from 'react';
import VideoInfo from './VideoInfo';
import Comments from './Comments';
import Aside from './Aside';


class Main extends React.Component {

  render() {

    const { 
      currentVideo, 
      handleChange, 
      handleSubmit, 
      value, 
      commentArray, 
      videoArray, 
      match, 
      getVideos, 
      handleDelete } = this.props

    return (
      <main className='main'>
        <section className='section'> {/**This section contains the current video's info and the generated comments */}
        {
          /** 
          *VideoInfo Component 
          * Passing down data from App.js to generate the current video information
          */
        }
          <VideoInfo currentVideo={currentVideo}/>
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
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            value={value}
            commentsArray={commentArray}
            handleDelete={handleDelete}
          />
        </section>

        {
          /** 
          *Aside Component 
          * Passing down data from App.js to generate the list of next videos
          */
        }
          <Aside 
            videoArray={videoArray} 
            match={match}
            getVideos={getVideos}
          />
      </main>
    );
  }
}

export default Main;