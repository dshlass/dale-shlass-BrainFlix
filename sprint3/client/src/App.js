import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Upload from './components/Upload';
import Master from './components/Master';

class App extends React.Component {

//Url builder for both the Upload page and the Master
  urlHandler = endpoint => {
    const apiKey = "a74bc77e-a64a-4c16-94a1-ba5cb480ac2e";
    return `http://localhost:8000/${endpoint}?api_key=${apiKey}`;
  };

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


