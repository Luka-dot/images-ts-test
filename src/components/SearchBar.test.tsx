import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';



import { findByTestAttr, checkProps } from '../../test/testUtils';
import SearchBar from './SearchBar';

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = { searchText: '' };

const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props }   // setting default with option to overide with props.
    return shallow(<SearchBar {...setupProps} />)
};

test('render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'search-bar-container'); 
    expect(component.length).toBe(1);
});