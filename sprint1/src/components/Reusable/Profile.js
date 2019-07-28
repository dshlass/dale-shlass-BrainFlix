import React from 'react';
import profilePic from '../../assets/Images/Mohan-muruge.jpg';

//Reusable profile photo
class Profile extends React.Component {
  render() {
    return (
      <>
        <img className={this.props.class} src={profilePic} alt={this.props.altTag}/>
      </>
    );
  }
}

export default Profile;
