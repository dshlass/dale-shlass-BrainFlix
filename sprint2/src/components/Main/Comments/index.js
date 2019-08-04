import React from 'react';
import Button from '../../Reusable/Button';
import PostedComment from './PostedComment';
import Profile from '../../Reusable/Profile';

class Comments extends React.Component {

  render() {

    const {commentsArray, handleSubmit,value, handleChange} = this.props

    return (
      <section className="section--comments">
        <div className="comments"> {/**Start of the comment wrapper */}
          <div className="comments__flex"> {/**Start of the comment flex container */}
            <Profile class={'comments__img--large'} alt={'A picture of Mohan'}/>
            <form className="comments__form" onSubmit={handleSubmit}> {/**Start of the comment form. text area value is passed to state in App.js on submit*/}
              <label className='comments__label' htmlFor="comment">Join the Conversation</label>
              <textarea name="comment" className='comments__input comments__input--comment' 
                        placeholder="Write comment here" value={value} onChange={handleChange}></textarea> {/**Every value types in text area is passed to state in App.js */}
              <Button class={'button comments__submit'} display={"Comment"}/>
            </form> {/**End of the comment form */}
          </div> {/**End of the comment flex container */}
          <div className="comments--posted">
            { /**This generates the list of comments associated with the current video */
              commentsArray.map(comment => 
                <PostedComment 
                  key={comment.id} 
                  handleDelete={this.props.handleDelete} 
                  name={comment.name} 
                  date={comment.timestamp} 
                  comment={comment.comment}
                  likes={comment.likes} 
                  id={comment.id}
                />)
            }
          </div>
        </div> {/**End of the comment wrapper */}
      </section>
    );
  }
}

export default Comments;
