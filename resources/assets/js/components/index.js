import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import App from './App';
import GetStories from './stories/GetStories';
import Archive from './archive/Archive';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={GetStories} />
            <Route path="archive" component={Archive} />
        </Route>
    </Router>
), document.getElementById('app-container'));