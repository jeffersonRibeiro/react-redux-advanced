import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import requireAuth from 'components/hoc/requireAuth';
import * as actions from 'services/actions';

class CommentBox extends Component {
  state = {
    comment: ''
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: '' });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea
            value={this.state.comment}
            onChange={this.handleChange('comment')}
          />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

export default compose(
  connect(
    null,
    actions
  ),
  requireAuth
)(CommentBox);
