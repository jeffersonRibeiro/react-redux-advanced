import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
