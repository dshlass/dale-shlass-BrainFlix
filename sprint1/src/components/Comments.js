import React from 'react';
import Button from './Button';

class Comments extends React.Component {

  state= {
    value: ''
  }

  handleChange= (event) =>{
    this.setState({value: event.target.value});
  }

  handleSubmit= (event) => {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
    <section className="section section--comments"> 
      <div className="comments">
      <div className="comments__flex">
        <img className="comments__img--large" src={require("../assets/Images/Mohan-muruge.jpg")} alt=""/>
        <form className="comments__form" onSubmit={this.handleSubmit}>
          <label className='comments__label' htmlFor="comment">Join the Conversation</label>
          <textarea name="comment" className='comments__input comments__input--comment' placeholder="Write comment here" value={this.state.value}  onChange={this.handleChange}></textarea>
          <Button class={'button comments__submit'} display={"Comment"}/>
        </form>
      </div>
      <div className="comments--posted">
      
        {/* I need to render this as an array of values passed down from App.js 
        <div class='comments__posted-comment'>
      <div class='comments__img'>
        <img class='comments__img--small' src='https://www.fillmurray.com/54/54' alt='fillMurray'/>
      </div>
      <div class='content'>
        <div class='content__flex'>
          <p class="content__username"></p>
          <p class="content__date"></p>
        </div>
        <div>
          <p class='content__comment'></p>
        </div>
      </div>
    </div> */}




      </div>
    </div> 
  </section>



    );
  }
}

export default Comments;
