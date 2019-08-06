import React from "react";
import Button from "../../Reusable/Button";
import PostedComment from "./PostedComment";
import Profile from "../../Reusable/Profile";
import axios from "axios";

class Comments extends React.Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value === "") {
      alert("You must submit a comment");
    } else {
      this.postComment(this.state.value);
    }
  };

  postComment = comment => {
    let id = this.props.match.params.id;
    if (!this.props.match.params.id) {
      id = "1af0jruup5gu";
    }

    let body = {
      name: `Dale`,
      comment: comment
    };

    axios({
      method: "post",
      url: this.props.urlHandler("videos/" + id + "/comments"),
      contentType: "application/json",
      data: body
    })
      .then(request => {
        this.props.getVideos(this.props.match.params.id);
        let newComments = this.props.commentsArray.unshift(request.data);
        this.setState({ commentsArray: newComments });
      })
      .then(this.setState({ value: "" }))
      .catch(err => console.log(err));
  };

  handleDelete = event => {
    event.preventDefault();

    let id = this.props.match.params.id;
    if (!this.props.match.params.id) {
      id = "1af0jruup5gu";
    }

    let targetId =
      event.currentTarget.parentElement.parentElement.parentElement.id;
    axios
      .delete(this.props.urlHandler("videos/" + id + "/comments/" + targetId))
      .then(req => {
        let pos = this.props.commentsArray
          .map(comments => comments.id)
          .indexOf(req.data.id);
        let newComments = this.props.commentsArray.splice(pos, 1);
        this.props.getVideos(this.props.match.params.id);
        this.setState({ commentsArray: newComments });
      })
      .catch(err => console.log(err));
  };

  putLike = event => {
    event.preventDefault();

    // let id = this.props.match.params.id;
    // if (!this.props.match.params.id) {
    //   id = "1af0jruup5gu";
    // }

    //have this target the sibling element
    let targetLike = event.currentTarget.nextSibling;

    console.log(targetLike);

    let targetId =
      event.currentTarget.parentElement.parentElement.parentElement.id;

    let pos = this.props.commentsArray
      .map(comments => comments.id)
      .indexOf(targetId);
    targetLike.innerHTML = this.props.commentsArray[pos].likes + 1;

    this.props.commentsArray[pos].likes = parseInt(targetLike.innerHTML);

    this.setState({ commentsArray: this.props.commentsArray });

    //UNCOMMENT AXIOS ONCE API IS WORKING
    // axios
    //   .put(this.props.urlHandler("videos/" + id + "/likes"))
    //   .then(req => {
    //     //use target id, set state to id:likes + 1

    //     // let pos = this.props.commentsArray
    //     //       .map(comments => comments.id)
    //     //       .indexOf(req.data.id);
    //     // this.props.commentsArray[pos].likes = this.props.commentsArray[pos].likes + 1;

    //     //this.setState()

    //     console.log(req);
    //   })
    //   .catch(err => console.log(err));
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.id !== prevProps.match.params.id &&
      this.props.match.params.id
    ) {
      this.setState({ commentsArray: this.props.commentsArray });
    }
  }

  render() {
    const { commentsArray } = this.props;
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
              <Button class={"button comments__submit"} display={"Comment"} />
            </form>
            {/**End of the comment form */}
          </div>
          {/**End of the comment flex container */}
          <div className="comments--posted">
            {/**This generates the list of comments associated with the current video */
            commentsArray.map(comment => (
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
            ))}
          </div>
        </div>
        {/**End of the comment wrapper */}
      </section>
    );
  }
}

export default Comments;
