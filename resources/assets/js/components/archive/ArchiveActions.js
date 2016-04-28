import React from 'react';
import $ from 'jquery';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

var buttonStyle = {
    cursor: 'pointer'
}

const ArchiveActions = React.createClass({
    getInitialState: function () {
        "use strict";
        return {
            archive: [],
            refresh: false
        };
    },
    componentWillReceiveProps: function (archive) {
        "use strict";
        this.setState({
            archive: archive
        });
    },
    handleClick: function (e) {
        "use strict";
        $.ajax({
            type: "POST",
            url: '/remove',
            data: this.props.archive,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
            },
            dataType: 'json'
        });
    },
    render: function () {
        "use strict";
        return (
            <i className="glyphicon glyphicon-remove" style={buttonStyle} onClick={this.handleClick}></i>
        )
    }
});

export default ArchiveActions;