import React from 'react';
import profilePic from '../assets/Images/Mohan-muruge.jpg';

class Profile extends React.Component {
  render() {
    return (
      <div className='profilePic__wrapper'>
        <img className={this.props.class}src={profilePic} alt={this.props.altTag}/>
      </div>
    );
  }
}

export default Profile;
