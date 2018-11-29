import { SAVE_COMMENTS } from 'services/actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENTS,
    payload: comment
  };
}
