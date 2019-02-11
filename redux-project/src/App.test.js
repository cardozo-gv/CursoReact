// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { render } from 'enzyme';

it('renders without crashing', () => {
  render(<Provider store={store}><App /></Provider>);

});
