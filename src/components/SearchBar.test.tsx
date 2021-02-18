import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';



import { findByTestAttr, checkProps } from '../../test/testUtils';
import SearchBar from './SearchBar';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = { searchText: '' };

const setUp = (props={}) => {
    const setupProps = { ...defaultProps, ...props }   // setting default with option to overide with props.
    return shallow(<SearchBar {...setupProps} />)
};

test('render without error', () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'search-bar-container'); 
    expect(component.length).toBe(1);
});
test('should find input-area', () => {
    const wrapper = setUp();
    const inputFiedl = findByTestAttr(wrapper, 'input-area');
    expect(inputFiedl.length).toBe(1);
});
test('Should capture firstname correctly onChange', () => {
    const wrapper = setUp();;
    const inputFiedl = findByTestAttr(wrapper, 'input-area');
    inputFiedl.simulate('change', {target: { value: 'Hello' }});
    expect(wrapper.state('searchText')).toBe('Hello');
});