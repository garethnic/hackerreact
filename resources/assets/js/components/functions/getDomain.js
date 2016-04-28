function getDomain(storyURL) {
    "use strict";
    var url = storyURL.split('/');

    return url[2].replace('www.', '');
}

export default getDomain;