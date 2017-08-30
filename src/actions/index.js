// @flow

import SAVE_COMMENT from './types';

export default function saveComment(comment: string) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}
