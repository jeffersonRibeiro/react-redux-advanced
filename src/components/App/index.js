import React from "react";
import { Route, Switch } from "react-router-dom";

import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default () => {
  return (
    <div>
      <Switch>
        <Route path="/post" component={CommentBox} />
        <Route exact path="/" component={CommentList} />
      </Switch>
    </div>
  );
};
