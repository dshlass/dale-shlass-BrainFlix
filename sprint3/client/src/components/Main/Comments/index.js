import React from "react";
import Button from "../../Reusable/Button";
import PostedComment from "./PostedComment";
import Profile from "../../Reusable/Profile";
import axios from "axios";

class Comments extends React.Component {
  state = {
    value: "",
  };

  //Controls the display on the comment section if there are no comments
  commentController = (props) => {
    if (!props.commentsArray.length) {
      return(<p className="content__no-comment">Please add a new comment</p>)
    } else {
      return (props.commentsArray.map(comment => (
        <PostedComment
          key={comment.id}
          handleDelete={this.handleDelete}
          name={comment.name}
          date={comment.timestamp}
          comment={comment.comment}
          likes={comment.likes}
          id={comment.id}
          putLike={this.putLike}
        />
      )))
    }
  };

  //Sets the state of the value as you type in a comment
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  //ensures empty comments are not submitted
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value === "") {
      alert("You must submit a comment");
    } else {
      this.postComment(this.state.value);
    }
  };
  
  //posts a new comment
  postComment = (comment) => {
    
    let id = this.props.match.params.id;
    
    if (!this.props.match.params.id) {
      id = "1af0jruup5gu";
    }

    let body = {
      name: `Dale`,
      comment: comment
    }

    axios({
      method: "post",
      url: this.props.urlHandler("videos/" + id + "/comments"),
      headers: {
        "content-type": "application/json"
      },
      data: body
    })
    .then(request => {
      let newComments = this.props.commentsArray.unshift(request.data);
      this.setState({ commentsArray: newComments });
      this.props.getVideos(this.props.match.params.id)
    })
    .then(this.setState({ value: "" }))
    .catch(err => console.log(err));
  }
  //end of the postComment function

  //deletes a comment
  handleDelete = (event) => {
    event.preventDefault();

    let id = this.props.match.params.id;
    
    if (!this.props.match.params.id) {
      id = "1af0jruup5gu";
    }

    let targetId = event.currentTarget.parentElement.parentElement.parentElement.id;
    
    axios
      .delete(this.props.urlHandler("videos/" + id + "/comments/" + targetId))
      .then(req => {
        
        let pos = this.props.commentsArray
          .map(comments => comments.id)
          .indexOf(req.data.id);

        let newComments = this.props.commentsArray.splice(pos, 1);
        this.setState({ commentsArray: newComments });
        this.props.getVideos(this.props.match.params.id)
      })
      .catch(err => console.log(err));
  }
  //end of the deleteComment function

  //Puts a like on the comment
  putLike = (event) => {
    event.preventDefault();

    let id = this.props.match.params.id;
    if (!this.props.match.params.id) {
      id = "1af0jruup5gu";
    }

    let targetId = event.currentTarget.parentElement.parentElement.parentElement.id;

    let targetLike = event.currentTarget.nextSibling;
    let pos = this.props.commentsArray
              .map(comments => comments.id)
              .indexOf(targetId);
    
    targetLike.innerHTML = this.props.commentsArray[pos].likes + 1;

    this.props.commentsArray[pos].likes = parseInt(targetLike.innerHTML);

    axios.put(this.props.urlHandler("videos/" + id + "/comments/" + targetId))
    .then(req => {
      if (req) {
        this.setState({ commentsArray: this.props.commentsArray });
      }
    }).catch(err => console.log(err));
  }
  //end of the putLike function

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id && this.props.match.params.id) {
      this.setState({ commentsArray: this.props.commentsArray });
    }
  }

  render() {
    return (
      <section className="section--comments">
        <div className="comments">
          {/**Start of the comment wrapper */}
          <div className="comments__flex">
            {/**Start of the comment flex container */}
            <Profile
              class={"comments__img--large"}
              alt={"A picture of Mohan"}
            />
            <form className="comments__form" onSubmit={this.handleSubmit}>
              {/**Start of the comment form. text area value is passed to state in App.js on submit*/}
              <label className="comments__label" htmlFor="comment">
                Join the Conversation
              </label>
              <textarea
                name="comment"
                className="comments__input comments__input--comment"
                placeholder="Write comment here"
                value={this.state.value}
                onChange={this.handleChange}
              />
              {/**Every value types in text area is passed to state in App.js */}
              <Button
                class={"button comments__submit"}
                display={"Comment"}
              />
            </form>
            {/**End of the comment form */}
          </div>
          {/**End of the comment flex container */}
          <div className="comments--posted">
            {
              /**This generates the list of comments associated with the current video */
              this.commentController(this.props)
            }
          </div>
        </div>
        {/**End of the comment wrapper */}
      </section>
    );
  }
}

export default Comments;
