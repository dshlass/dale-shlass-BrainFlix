import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import App from './App';
import Upload from './components/Upload'
import Test from './Router'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
      <Switch>
            <Route path='/upload'  component={Upload}/>
            <Route path='/:id'  render={(props) => <Test match={props.match}/>}/>
            <Route path='/' exact component={Test}/>
      </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
