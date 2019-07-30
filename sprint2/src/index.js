import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import App from './App';
// import Api from './data/Api'
import Upload from './components/Upload'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router>
    <Switch>
      <Route path='/' exact component={App}/>
      <Route path='/upload' component={Upload}/>
    </Switch>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
