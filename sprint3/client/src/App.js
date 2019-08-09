import React from 'react';
// import axios from 'axios';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Upload from './components/Upload';
import Master from './components/Master';

class App extends React.Component {

  urlHandler = endpoint => {
    const apiKey = "a74bc77e-a64a-4c16-94a1-ba5cb480ac2e";
    return `http://localhost:8000/${endpoint}?api_key=${apiKey}`;
  };


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
  

  
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/upload' exact render={(props)=> <Upload match={props.match} urlHandler={this.urlHandler} />}/>
          <Route path='/videos/:id' exact render={(props) => <Master match={props.match} urlHandler={this.urlHandler} />}/>
          <Route path='/' exact render={(props) => <Master match={props.match} urlHandler={this.urlHandler} />}/>
        </Switch>
      </BrowserRouter>    
      )
    }
  }

  export default App


