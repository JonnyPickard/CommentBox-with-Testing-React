import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/components/app';

describe('App', () => {
  it('renders something', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).to.exist;
  });
});
