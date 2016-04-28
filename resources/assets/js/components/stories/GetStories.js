import React from 'react';
import $ from 'jquery';
import StoryList from './StoryList';

const topStories = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';

const GetStories = React.createClass({
    getInitialState: function () {
        "use strict";
        return {
            stories: []
        }
    },
    componentDidMount: function () {
        "use strict";
        this.serverRequest = $.getJSON(topStories, function (data) {
            var top20 = data.slice(0, 20);
            this.setState({
                stories: top20
            });
        }.bind(this));
    },
    render: function () {
        "use strict";
        return (
            <div>
                <StoryList stories={this.state.stories}/>
            </div>
        )
    }
});

export default GetStories;