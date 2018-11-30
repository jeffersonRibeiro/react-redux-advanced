import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default class extends Component {
  renderButton() {}

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Switch>
          <Route path="/post" component={CommentBox} />
          <Route exact path="/" component={CommentList} />
        </Switch>
      </div>
    );
  }
}
