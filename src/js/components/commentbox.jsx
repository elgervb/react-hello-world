import React from 'react';
import CommentList from './commentlist.jsx';
import CommentForm from'./commentform.jsx';

export default class CommentBox extends React.Component {
    render() {
        return <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
    }
}
