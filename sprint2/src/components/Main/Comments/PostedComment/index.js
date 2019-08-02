import React from 'react';

//Generated in Comments.js with the comment array passed down from App.js
//Styles included within Comments.scss
class PostedComment extends React.Component {
  

  //Generates the dynamic times of each post.
  timeStamp = (date) => {
      console.log(typeof date)
      console.log(date)
    //Setting variables for current date-time
    let pageDate = new Date();
    // console.log(pageDate)
    let currentYear = pageDate.getFullYear();
    let currentMonth = pageDate.getMonth() + 1;

    //Setting variables for posted date-time
    let postedDate = new Date(date);
    // console.timeLog(date);
    let postedYear = postedDate.getFullYear();
    let postedMonth = postedDate.getMonth() + 1;

    //Set conditionals to calculate the elapsed time
    //Checks to see if this post was posted this year or last 
    if (currentYear >  postedYear) {

      let yearDiff = currentYear - postedYear;

      //monthDiff will add 12 months to current Month and uses the difference
      //mainly used if a post was posted in december 2018 vs january 2019
      //this would equare to 1 year difference, but in reality it is 1 month.
      let monthDiff = ((yearDiff * 12) + currentMonth) - postedMonth;

      //Evaluates into years 
      if (monthDiff >= 12) {
        return `${yearDiff} years old`
      }
      //Evaluates into months
      else if (monthDiff > 1 && monthDiff < 12 )  {
        return `${monthDiff} months old`;
      }
    }

    //If the post is within this current year
    if (currentYear ===  postedYear) {
      
      //Setting variables for the differences between months, days, hours, minutes, seconds
      let monthDiff = currentMonth - postedMonth;
      let dayDiff = Math.floor(Math.abs(pageDate - postedDate) / 1000 / 60 / 60 / 24);
      let hourDiff = Math.floor(Math.abs(pageDate - postedDate) / 1000 / 60 / 60);
      let minuteDiff = Math.floor(Math.abs(pageDate - postedDate) / 1000 / 60);
      let secondDiff = Math.floor(Math.abs(pageDate - postedDate) / 1000);

        console.log(secondDiff)
      //Using 30 days as the cutoff for months old
      if (dayDiff >= 30) {
        return `${monthDiff} months ago`;
      }

      //If within the last 30 days, it is days old
      if (dayDiff > 0 && dayDiff < 30) {
        return `${dayDiff} days ago`;
      }

      //If the post is within the current day
      else if (!dayDiff) {
        
        //If the post was posted more than 1 hour ago display in hours
        if (secondDiff >= 3600 ) {
          return `${hourDiff} hours ago`;
        }
        
        //If the post was posted more than 1 minute ago but less than an hour ago display in minutes
        else if (secondDiff > 60 && secondDiff < 3600 ) {
          return `${minuteDiff} minutes ago`;
        }

        //If the post was posted less than a minute ago display in seconds
        else if (secondDiff > 0 && secondDiff < 60 ) {
          return `${secondDiff} seconds ago`;
        }

        //displays just now the newest post.
        else if (!secondDiff) {
          return `just now`;
        }
      } //End of current day If statement
    } //End of If the post is within this current year
  } //End of Timestamp
  
  render() {  

    // console.log(this.props.date)
    return (
        <div className='comments__posted-comment'>
          <div className='comments__img'>
            <img className='comments__img--small' src='https://www.fillmurray.com/54/54' alt='fillMurray'/>
          </div>
          <div className='content'> {/**Start of the content wrapper */}
            <div className='content__flex'> {/**Start of the username and date wrapper */}
              <p className="content__username">{this.props.name}</p>
              <p className="content__date">{this.timeStamp(this.props.date)}</p> {/**This generates a new timestamp for each post everytime a comment is posted */}
            </div> {/**End of username and date wrapper */}
              <p className='content__comment'>{this.props.comment}</p>
          </div>
        </div>
    );
  }
}

export default PostedComment;
