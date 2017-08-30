// @flow

import React from 'react';
import { connect } from 'react-redux';

type Props = {
  comments: Array<?string>
}

const CommentList = ({ comments }: Props) => {
  const list = comments.map(comment => <li key={comment}>{comment}</li>);

  return (
    <div className="comment-list">
      <ul>{list}</ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
