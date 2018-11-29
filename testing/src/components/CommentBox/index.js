import React, { Component } from 'react';

class CommentBox extends Component {
  state = {
    comment: '',
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  }

  render() {
    return (
      <form>
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

export default CommentBox;