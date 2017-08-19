/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import jsdom from 'jsdom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import chaiEnzyme from 'chai-enzyme';
import chai from 'chai';

import reducers from '../src/reducers';

chai.use(chaiEnzyme());

global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = global.window.navigator;

// function renderComponent(ComponentClass, props = {}, state = {}) {
//   const componentInstance = TestUtils.renderIntoDocument(
//     <Provider store={createStore(reducers, state)}>
//       <ComponentClass {...props} />
//     </Provider>,
//   );
// }

// export default renderComponent;
