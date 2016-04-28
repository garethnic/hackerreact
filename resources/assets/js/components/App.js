import React from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

const App = React.createClass({
    render: function () {
        "use strict";
        return (
            <div>
                <h3><Link to="/">HackerReact</Link></h3>
                <div className="pull-right"><Link to="/archive">Archive</Link></div><br />
                {this.props.children}
            </div>
        )
    }
});

export default App;