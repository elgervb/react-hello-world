import React from 'react';
import $ from 'jquery';
import CommentList from './commentlist.jsx';
import CommentForm from'./commentform.jsx';

export default class CommentBox extends React.Component {
    constructor() {
        super();

        this.state = {data: []};
    }

    componentDidMount() {
        this.loadCommentsFromServer();
        setInterval(() => this.loadCommentsFromServer(), this.props.pollInterval);
    }

    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: (data) => {
                this.setState({data: data});
            },
            error: (xhr, status, err) => {
                console.error(this.props.url, status, err.toString());
            }
        });
    }

    render() {
        return <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
    }
}
