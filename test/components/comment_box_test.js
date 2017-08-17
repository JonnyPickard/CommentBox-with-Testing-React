import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  it('has a the class comment-box', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper).to.have.class('comment-box');
  });

  it('has a text area', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper.find('textarea')).to.exist;
  });

  it('has a button', () => {
    const wrapper = shallow(<CommentBox />);
    expect(wrapper.find('button')).to.exist;
  });
});
