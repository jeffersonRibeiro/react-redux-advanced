import { SAVE_COMMENTS, FETCH_COMMENTS } from 'services/actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENTS:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
}
