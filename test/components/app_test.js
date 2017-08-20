import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import renderContainer from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  it('has the className app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.hasClass('app')).to.equal(true);
  });

  describe('renders components', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = renderContainer(App);
    });

    it('renders 1 comment box component', () => {
      expect(wrapper.find('CommentBox')).to.have.length(1);
    });

    it('renders 1 comment list component', () => {
      expect(wrapper.find('CommentList')).to.have.length(1);
    });
  });
});
