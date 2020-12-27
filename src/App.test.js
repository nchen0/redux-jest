import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr, testStore} from './../Utils';
import React, { Component } from 'react';

const setUp = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    // console.log(wrapper.debug());
    return wrapper;
};

describe ('App Component', () => {
    let wrapper;
    beforeEach(() => {
        const initialState = {
            posts: [{
                title: 'Example title',
                body: 'Some text',
            },
            {
                title: 'Example title 2',
                body: 'Some text',
            },
            {
                title: 'Example title 3',
                body: 'Some text',
            }]
        }
        wrapper = setUp(initialState);
    })

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component).toHaveLength(1);
    })
})
