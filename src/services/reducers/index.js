import { combineReducers } from 'redux';

import commentsReducer from 'services/reducers/comments';
import authReducer from 'services/reducers/auth';

export default combineReducers({
  comments: commentsReducer,
  auth: authReducer
});
