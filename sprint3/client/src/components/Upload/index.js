import React from "react";
import Navigation from "../Navigation";
import placeholder from "../../assets/Images/Upload-video-preview.jpg";
import Button from "../Reusable/Button";
import { Link } from "react-router-dom";
import axios from 'axios';

//Video information passed down as props from App.js
class Upload extends React.Component {

  state= {
    videoDescription: '',
    videoTitle: ''
  }

  //adds the video title and description as state
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    const newState = { ...this.state, [name]: value };
    this.setState(newState); 
  }

  //Ensures that the user submits a video title and description
  handleSubmit = (event) => {
    event.preventDefault();
    if (!this.state.videoDescription || !this.state.videoTitle) {
      alert("You must submit both a video title and description");
    } else {
      this.submitVideo(this.state.videoDescription, this.state.videoTitle) ;
    }
  };

  //Submits a new video and then redirects the page to the home page
  submitVideo = (videoDescription, videoTitle) => {

    let objectToSend = {
      "title": videoTitle,
      "channel": "BrainStation",
      "image": "http://localhost:3000/static/media/Upload-video-preview.c814c81c.jpg",
      "description": videoDescription,
      "duration": "3:50",
      "video": "https://project-2-api.herokuapp.com/stream",
    }

    let body = JSON.stringify(objectToSend);

    console.log(body);
    axios({
      method: "post",
      url: this.props.urlHandler("upload"),
      headers: {
        "content-type": "application/json"
      },
      data: body
    })
    .then(result => this.setState({ result: result }))
    .then(setTimeout(()=> window.location = "/", 500))
    .catch(error => console.log("Error: ", error));
  }
  //end of submitVideo function

  render() {
    return (
      <>
        <Navigation />
        <div className="upload"> {/**Start of the upload wrapper*/}
          <h1 className="upload__header">Upload Video</h1>
          <div className="upload__wrapper--flex"> {/**Start of the upload flex wrapper*/}
            <div className="upload__wrapper--image"> {/**Start of video thumbnail wrapper*/}
              <p className="upload__label">Video thumbnail</p>
              <img
                className="upload__image"
                src={placeholder}
                alt="uploaded video placeholder"
              />  
            </div>{/**End of video thumbnail wrapper*/}
            <form className="upload__wrapper--input" onSubmit={this.handleSubmit}> {/**Start of the upload form */}
              <label htmlFor="videoTitle" className="upload__label">
                Title your video
              </label>
              {/**Input for video title */}
              <input
                className="upload__input"
                name="videoTitle"
                id="video-title"
                placeholder="Add a title for your video"
                onChange={this.handleChange}
              /> 
              <label htmlFor="videoDescription" className="upload__label">
                Add a video description
              </label>
                {/**Input for video description */}
              <textarea
                className="upload__textarea"
                name="videoDescription"
                id="video-description"
                placeholder="Add a description of your video"
                onChange={this.handleChange}
              />
              <div className="upload__wrapper--button"> {/**Start of the upload/cancel button wrapper */}
                <Link to="/" className={"upload__cancel"}>
                  Cancel
                </Link>
                <Button display={"Publish"} class={"upload__publish"} />
              </div> {/**End of the upload/cancel button wrapper */}
            </form> {/**End of the upload form */}
          </div> {/**End of the upload flex wrapper*/}
        </div> {/**End of the upload wrapper*/}
      </>
    );
  }
}

export default Upload;
