import React from 'react';
import $ from 'jquery';
//import ArchiveActions from './ArchiveActions'
import getDomain from '../functions/getDomain';

const storiesURL = '/stories';

var buttonStyle = {
    cursor: 'pointer'
}

const Archive = React.createClass({
    getInitialState: function () {
        "use strict";
        return {
            stories: []
        };
    },
    componentDidMount: function () {
        "use strict";
        this.serverRequest = $.getJSON(storiesURL, function (data) {
            this.setState({
                stories: data
            });
        }.bind(this));
    },
    handleClick: function (story, e) {
        "use strict";
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: '/remove',
            data: story,
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf_token"]').attr('content')
            },
            dataType: 'json'
        });

        var stories = this.state.stories.filter(function (stry) {
            return story.id !== stry.id;
        });

        this.setState({
            stories: stories
        });
    },
    render: function () {
        "use strict";
        var stories = this.state.stories;
        return (
            <div>
                {stories.map(function (story) {
                    var whenPosted = moment.unix(story.time).fromNow();
                    var domainOfStory = getDomain(story.url);
                    return (
                        <div className="story" key={story.id}>
                            <a href={story.url}>{story.title}</a>&nbsp;<small>({domainOfStory})</small>
                            <div>
                                <small>{story.score} points by {story.by} {whenPosted}</small>
                                <span className="pull-right" onClick={this.handleClick.bind(this, story)}>
                                    <i className="glyphicon glyphicon-remove" style={buttonStyle}></i></span>
                            </div>
                        </div>
                    );
                }.bind(this))}
            </div>
        );
    }
});

export default Archive;