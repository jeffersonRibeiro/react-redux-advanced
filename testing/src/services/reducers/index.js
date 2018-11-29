import { combineReducers } from 'redux';

import commentsReducer from 'services/reducers/comments';

export default combineReducers({
  comments: commentsReducer
});
