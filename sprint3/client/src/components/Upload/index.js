import React from "react";
import Navigation from "../Navigation";
import placeholder from "../../assets/Images/Upload-video-preview.jpg";
import Button from "../Reusable/Button";
import { Link } from "react-router-dom";

//Video information passed down as props from App.js
class Upload extends React.Component {
  placeholder = event => {
    event.preventDefault();
  };

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
            <form
              className="upload__wrapper--input"
              onSubmit={this.placeholder}
            >
              <label htmlFor="video-title" className="upload__label">
                Title your video
              </label>
              <input
                className="upload__input"
                name="video-title"
                id="video-title"
                placeholder="Add a title for your video"
              />
              <label htmlFor="video-description" className="upload__label">
                Add a video description
              </label>
              <textarea
                className="upload__textarea"
                name="video-description"
                id="video-description"
                placeholder="Add a description of your video"
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
