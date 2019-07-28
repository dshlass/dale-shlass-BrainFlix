import React from 'react';

//Generated in Comments.js with the comment array passed down from App.js
//Styles included within Comments.scss
class PostedComment extends React.Component {
  render() {
    return (
        <div className='comments__posted-comment'>
          <div className='comments__img'>
            <img className='comments__img--small' src='https://www.fillmurray.com/54/54' alt='fillMurray'/>
          </div>
          <div className='content'> {/**Start of the content wrapper */}
            <div className='content__flex'> {/**Start of the username and date wrapper */}
              <p className="content__username">{this.props.name}</p>
              <p className="content__date">{this.props.date}</p>
            </div> {/**End of username and date wrapper */}
              <p className='content__comment'>{this.props.comment}</p>
          </div>
        </div>
    );
  }
}

export default PostedComment;
