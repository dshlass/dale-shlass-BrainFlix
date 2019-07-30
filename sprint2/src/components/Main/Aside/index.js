import React from 'react';
import NextVideo from './NextVideo';
// import axios from 'axios';







class Aside extends React.Component {
  
//   state ={
//     testArray: []
//   }


// urlHandler(endpoint) {
//   const apiKey = 'a74bc77e-a64a-4c16-94a1-ba5cb480ac2e';
//   return `https://project-2-api.herokuapp.com/${endpoint}?api_key=${apiKey}`
// }

//   getRequest = () => {
//   let request = 'videos';
//   let  url = this.urlHandler(request);

//   axios({
//       method: 'get',
//       url: url
//     }).then(requestData => {
      
//       this.setState({testArray: requestData.data}) ;
      
//     })
// }



  
  
  
  render() {
    // this.getRequest();

    //Desrtucturing the received props.
    const {videoArray} = this.props;
    // console.log(videoArray)

    return (
      <section className='side-video'>
        <p className='side-video__title'>Next Video</p>
        { /**This generates the list of videos that are next to play */
          videoArray.map(video => <NextVideo key={video.id} title={video.title} channel={video.channel} image={video.image} />)
        }
      </section>
    );
  }
}

export default Aside;
