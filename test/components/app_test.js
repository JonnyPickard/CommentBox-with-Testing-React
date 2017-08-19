import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import App from '../../src/components/app';

describe('App', () => {
  it('has the className app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.hasClass('app')).to.equal(true);
  });

  it('shows a comment box', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.comment-box')).to.have.length(1);
  });
});
