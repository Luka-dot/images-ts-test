import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

const setUp = () => shallow(<App />);

const findByTestAttr = (wrapper: { find: (arg0: string) => any; }, val: any) => wrapper.find(`[data-test='${val}']`)

test('render header component', () => {
  const wrapper = setUp();
  const headerComponent = findByTestAttr(wrapper, 'header');
  expect(headerComponent.length).toBe(1);
});
test('render search bar component', () => {
  const wrapper = setUp();
  const searchBarComponent = findByTestAttr(wrapper, 'search-bar-component');
  expect(searchBarComponent.length).toBe(1);
});

