import React from 'react';
import Button from './Button';
import PostedComment from './PostedComment';

class Comments extends React.Component {
    
    commentsArray = this.props.commentsArray;
    

  render() {
    return (
    <section className="section section--comments"> 
      <div className="comments">
      <div className="comments__flex">
        <img className="comments__img--large" src={require("../assets/Images/Mohan-muruge.jpg")} alt=""/>
        <form className="comments__form" onSubmit={this.props.handleSubmit}>
          <label className='comments__label' htmlFor="comment">Join the Conversation</label>
          <textarea name="comment" className='comments__input comments__input--comment' placeholder="Write comment here" value={this.props.value} onChange={this.props.handleChange}></textarea>
          <Button class={'button comments__submit'} display={"Comment"}/>
        </form>
      </div>
      <div className="comments--posted">
        {
          this.commentsArray.map(comment => <PostedComment name={comment.name} date={comment.date} comment={comment.comment}/>)
        }
      </div>
    </div> 
  </section>



    );
  }
}

export default Comments;
