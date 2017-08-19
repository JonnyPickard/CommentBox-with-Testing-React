import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CommentList = ({ comments }) => {
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

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(CommentList);
