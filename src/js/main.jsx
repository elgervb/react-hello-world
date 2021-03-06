import React from 'react';
import ReactDOM from 'react-dom';
import { CommentBox } from './components/commentbox.jsx';

ReactDOM.render(
    <CommentBox url='/js/data/comments.json' pollInterval={10000} />,
    document.getElementById('content')
);
