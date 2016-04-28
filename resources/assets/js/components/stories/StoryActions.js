import React from 'react';
import $ from 'jquery';

var buttonStyle = {
    cursor: 'pointer'
}

const StoryActions = React.createClass({
    getInitialState: function () {
        "use strict";
        return {
            story: []
        }
    },
    componentWillReceiveProps: function (story) {
        "use strict";
        this.setState({
            story: story
        });
    },
    handleClick: function (e) {
        "use strict";
        $.ajax({
            type: "POST",
            url: '/archive',
            data: this.props.story,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
            },
            dataType: 'json'
        });
    },
    render: function () {
        "use strict";
        return (
            <i className="glyphicon glyphicon-tag" style={buttonStyle} onClick={this.handleClick}></i>
        )
    }
});

export default StoryActions;