// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';

import saveComment from '../actions';

type State = {
  comment: string
}

type Props = {
  saveComment: (comment: string) => string,
}

class CommentBox extends Component<Props, State> {
  onHandleChange: Function;
  handleSubmit: Function;

  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onHandleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.onHandleChange}
        />
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comment };
}

export default connect(mapStateToProps, { saveComment })(CommentBox);
