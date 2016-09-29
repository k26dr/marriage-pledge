import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Landing from './Landing'
import Signup from './Signup'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Landing} />
            <Route path="/signup" component={Signup} />
        </Router>
    </Provider>
    , document.getElementById('root')
);
