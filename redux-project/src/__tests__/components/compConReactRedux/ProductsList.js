// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import { mount } from 'enzyme';
import ConnectedProductsList  from '../../../components/compConReactRedux/ProductsList';


/*Mock */
import configureStore from 'redux-mock-store';

const mockStore = configureStore();
it('renders no products when store is empty', () => {
  const store = mockStore({ products: [] });
  const wrapper = mount(<ConnectedProductsList store={store} />).dive();
  expect(wrapper.find(".product").length).toBe(0);
});
