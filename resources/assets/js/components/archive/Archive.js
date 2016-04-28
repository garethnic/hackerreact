import React from 'react';
import $ from 'jquery';
import ArchiveActions from './ArchiveActions'
import getDomain from '../functions/getDomain';

const storiesURL = '/stories';

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
                                <span className="pull-right"><ArchiveActions archive={story}/></span>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
});

export default Archive;