// @flow

import SAVE_COMMENT from '../actions/types';

type Action = {
  +type: ?string,
  +payload: ?string
}

export default function (state: Array<?string> = [], action: Action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
}
