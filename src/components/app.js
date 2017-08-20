import React, { Component } from 'react';

import { CommentBox, CommentList } from '../containers';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <CommentBox />
        <CommentList />
      </div>
    );
  }
}
