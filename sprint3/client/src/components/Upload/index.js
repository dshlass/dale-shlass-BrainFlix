import React from "react";
import Navigation from "../Navigation";
import placeholder from "../../assets/Images/Upload-video-preview.jpg";
import Button from "../Reusable/Button";
import { Link } from "react-router-dom";
import axios from 'axios';
import uuid from 'uuid/v1';

//Video information passed down as props from App.js
class Upload extends React.Component {

  state= {
    videoDescription: '',
    videoTitle: ''
  }


  placeholder = event => {
    event.preventDefault();
  };

  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    const newState = { ...this.state, [name]: value };
    this.setState(newState); 
    
  }

  log = (event) => {
    event.preventDefault();
    let objectToSend = {
        "id": uuid(),
        "title": this.state.videoTitle,
        "channel": "BrainStation",
        "image": "http://localhost:3000/static/media/Upload-video-preview.c814c81c.jpg",
        "description": this.state.videoDescription,
        "views": "9001",
        "likes": "69,420",
        "duration": "3:50",
        "video": "https://project-2-api.herokuapp.com/stream",
        "timestamp": new Date(),
        "comments": [
          // {
          //   "name": "Micheal Lyons",
          //   "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
          //   "id": uuid(),
          //   "likes": 0,
          //   "timestamp": 1545162149000
          // },
          // {
          //   "name": "Gary Wong",
          //   "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          //   "id": uuid(),
          //   "likes": 0,
          //   "timestamp": 1544595784046
          // },
          // {
          //   "name": "Theodore Duncan",
          //   "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          //   "id": uuid(),
          //   "likes": 0,
          //   "timestamp": 1542262984046
          // }
        ]
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
      .then(result => {
        console.log(result);
        this.setState({ result: result });
      })
      .then(
        setTimeout(()=> window.location = "/", 500)
        )
      .catch(error => {
        console.log("Error: ", error);
      });
  }


  render() {
    return (
      <>
        <Navigation />
        <div className="upload">
          <h1 className="upload__header">Upload Video</h1>
          <div className="upload__wrapper--flex">
            <div className="upload__wrapper--image">
              <p className="upload__label">Video thumbnail</p>
              <img
                className="upload__image"
                src={placeholder}
                alt="uploaded video placeholder"
              />
            </div>
            <form className="upload__wrapper--input" onSubmit={this.log}>
              <label htmlFor="videoTitle" className="upload__label">
                Title your video
              </label>
              <input
                className="upload__input"
                name="videoTitle"
                id="video-title"
                placeholder="Add a title for your video"
                onChange={this.handleChange}
              />
              {/* <input type="file" name="uploadFile"/> */}
              <label htmlFor="videoDescription" className="upload__label">
                Add a video description
              </label>
              <textarea
                className="upload__textarea"
                name="videoDescription"
                id="video-description"
                placeholder="Add a description of your video"
                onChange={this.handleChange}
              />
              <div className="upload__wrapper--button">
                <Link to="/" className={"upload__cancel"}>
                  Cancel
                </Link>
                <Button display={"Publish"} class={"upload__publish"} />
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Upload;
