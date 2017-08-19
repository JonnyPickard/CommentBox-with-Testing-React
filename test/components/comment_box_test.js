import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<CommentBox />);
  });

  it('has a the class comment-box', () => {
    expect(wrapper.hasClass('comment-box')).to.equal(true);
  });

  it('has a text area', () => {
    expect(wrapper.find('textarea')).to.have.length(1);
  });

  it('has a button', () => {
    expect(wrapper.find('button')).to.have.length(1);
  });

  describe('entering some text', () => {
    beforeEach(() => {
      wrapper.find('textarea').simulate('change', { target: { value: 'new comment' } });
    });

    it('shows that text in the text area', () => {
      expect(wrapper.find('textarea')).to.have.value('new comment');
    });

    it('when submitted, clears the input', () => {
      wrapper.simulate('submit');
      expect(wrapper.find('textarea')).to.have.value('');
    });
  });
});
