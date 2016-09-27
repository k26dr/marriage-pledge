import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import store from './store'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Landing from './Landing'

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Landing} />
        </Router>
    </Provider>
    , document.getElementById('root')
);
