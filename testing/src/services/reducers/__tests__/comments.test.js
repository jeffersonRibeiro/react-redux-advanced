import commentsReducer from 'services/reducers/comments';
import { SAVE_COMMENTS } from 'services/actions/types';

it('handles actions of type SAVE_COMMENTS', () => {
  const action = {
    type: SAVE_COMMENTS,
    payload: 'New Comment'
  }

  const newState = commentsReducer([], action);
  expect(newState).toEqual(['New Comment']);
});