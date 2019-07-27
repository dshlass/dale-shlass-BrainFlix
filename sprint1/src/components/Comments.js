import React from 'react';
import Button from './Button';
import PostedComment from './PostedComment';
import Profile from './Profile';

class Comments extends React.Component {
    
    //Setting the data received from App.js to commentsArray for ease of use
    commentsArray = this.props.commentsArray;
    
  render() {
    return (
    <section className="section--comments">
      <div className="comments"> {/**Start of the comment wrapper */}
        <div className="comments__flex"> {/**Start of the comment flex container */}
          <Profile class={'comments__img--large'} alt={'A picture of Mohan'}/>
          <form className="comments__form" onSubmit={this.props.handleSubmit}> {/**Start of the comment form */}
            <label className='comments__label' htmlFor="comment">Join the Conversation</label>
            <textarea name="comment" className='comments__input comments__input--comment' placeholder="Write comment here" value={this.props.value} onChange={this.props.handleChange}></textarea>
            <Button class={'button comments__submit'} display={"Comment"}/>
          </form> {/**End of the comment form */}
        </div> {/**End of the comment flex container */}
        <div className="comments--posted">
          { /**This generates the list of comments associated with the current video */
            this.commentsArray.map(comment => <PostedComment key={comment.id + comment.name} name={comment.name} date={comment.date} comment={comment.comment}/>)
          }
        </div>
      </div> {/**End of the comment wrapper */}
    </section> 



    );
  }
}

export default Comments;
