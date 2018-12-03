import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

import * as actions from 'services/actions';

class App extends Component {
  renderButton() {
    const { auth, changeAuth } = this.props;

    if (!!auth) {
      return <button onClick={() => changeAuth(false)}>Sign Out</button>;
    } else {
      return <button onClick={() => changeAuth(true)}>Sign In</button>;
    }
  }

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

function mapStateToProps(state) {
  return { auth: state.auth };
}

export default connect(
  mapStateToProps,
  actions
)(App);
