import React from 'react';
// import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Upload from './components/Upload';
import Master from './components/Master';

class App extends React.Component {

  //Updates the value state when you type in the text area
  // handleChange= (event) => {
  //   this.setState({value: event.target.value});
  // }

  // //displays a new post when submitted
  // handleSubmit= (event) => {
  //   event.preventDefault();
  //   if (this.state.value === '') {
  //     alert('You must submit a comment');
  //   } else {

  //     this.postComment(this.state.value)

  //   }
  //   //Clears the textarea after submit is clicked
  //     if (!this.state.match) {
  //       let id = '1af0jruup5gu';
  //       this.getVideos(id)
  //     }  else {
  //               this.getVideos(this.state.match.params.id)

  //     }
  // }


  // postComment = (comment) => {

  //   let body = {
  //     name: `Dale`,
  //     comment: comment
  //   };

  //   axios({
  //     method: 'post',
  //     url: this.urlHandler('videos/' + this.state.id + '/comments'),
  //     contentType: 'application/json',
  //     data: body
  //   }).then( request => {

  //       let sortedComments = this.state.mainVideo
  //       sortedComments.comments.unshift(request.data)
  //       this.setState({sortedComments: sortedComments.comments})
  //       console.log(this.state.id)
  //       // this.getVideos(this.state.id)

  //        }).then(this.setState({value:''}))
  //   .catch(err => console.log(err))
  // }


  // handleDelete = (event) => {
  //   event.preventDefault();
  // console.log(this.props)


  //   let targetId = event.currentTarget.parentElement.parentElement.parentElement.id
  //   axios.delete(this.urlHandler('videos/' + this.state.match.params.id + '/comments/' + targetId ))
  //        .then(req => {
  //               console.log(req)
  //         this.getVideos(this.state.match.params.id)

  //         })
  //        .catch(err => console.log(err))
      
  // }



// Working
  
  

  
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/upload' exact component={Upload}/>
          <Route path='/videos/:id' exact  component={Master}/>
          <Route path='/' exact component={Master}/>
        </Switch>
      </BrowserRouter>    
      )
    }
  }

  export default App


