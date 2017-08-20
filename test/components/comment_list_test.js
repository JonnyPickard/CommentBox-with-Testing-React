import { expect } from 'chai';

import renderContainer from '../test_helper';
import { CommentList } from '../../src/containers';

describe('CommentList', () => {
  let wrapper;

  const testComments = ['new comment', 'other comment'];

  beforeEach(() => {
    wrapper = renderContainer(CommentList, null, { comments: testComments });
  });

  it('shows an LI for each component', () => {
    expect(wrapper.find('li')).to.have.length(2);
  });

  it('shows each comment that is provided', () => {
    expect(wrapper.find('li').first().text()).to.equal(testComments[0]);
    expect(wrapper.find('li').at(1).text()).to.equal(testComments[1]);
  });
});
