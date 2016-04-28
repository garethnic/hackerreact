import React from 'react';
import $ from 'jquery';
import StoryActions from './StoryActions';
import getDomain from '../functions/getDomain'

const StoryList = React.createClass({
    getInitialState: function () {
        "use strict";
        return {
            storyData: []
        }
    },
    componentWillReceiveProps: function (stories) {
        "use strict";
        for (var story in stories.stories) {
            var itemURL = 'https://hacker-news.firebaseio.com/v0/item/' + stories.stories[story] + '.json?print=pretty';
            var result = [];
            this.serverRequest = $.getJSON(itemURL, function (data) {
                result.push(data);
                this.setState({
                    storyData: result
                });
            }.bind(this));
        }
    },
    render: function () {
        "use strict";
        var stories = this.state.storyData;
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
                                <span className="pull-right"><StoryActions story={story} /></span>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
});

export default StoryList;