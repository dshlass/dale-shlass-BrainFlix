import React from 'react';

class PostedComment extends React.Component {
  render() {
    return (
        <div className='comments__posted-comment'>
          <div className='comments__img'>
            <img className='comments__img--small' src='https://www.fillmurray.com/54/54' alt='fillMurray'/>
          </div>
          <div className='content'>
            <div className='content__flex'>
              <p className="content__username">{this.props.name}</p>
              <p className="content__date">{this.props.date}</p>
            </div>
            <div>
              <p className='content__comment'>{this.props.comment}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default PostedComment;
