import React from 'react';
import ReactDOM from 'react-dom';
import './css/Master.scss';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Upload from './components/Upload'
import RequestHandler from './RequestHandler'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
      <Switch>
            <Route path='/upload'  component={Upload}/>
            <Route path='/:id'  render={(props) => <RequestHandler match={props.match}/>}/>
            <Route path='/' exact component={RequestHandler}/>
      </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
