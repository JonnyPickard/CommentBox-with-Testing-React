import { expect } from 'chai';

import commentReducer from '../../src/reducers/comments_reducer';
import SAVE_COMMENT from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unknown type', () => {
    expect(commentReducer(undefined, {})).to.eql([]);
  });

  it('handles action of type SAVE_COMMENT', () => {
    const action = { type: SAVE_COMMENT, payload: 'new comment' };

    expect(commentReducer([], action)).to.eql(['new comment']);
  });
});
