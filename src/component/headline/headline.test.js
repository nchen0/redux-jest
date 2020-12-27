import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Headline from './index';

import { findByTestAtrr } from './../../../Utils';

const setUp = (props={}) => {
    return shallow(<Headline {...props} />);
}

describe('Headline Component', () => {
    describe ('Have props', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Description'
            }
            wrapper = setUp(props);
        })

        it('Should render without errors', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component.length).toBe(1);
        })

        it('Should render a H1', () => {
            const h1 = findByTestAtrr(wrapper, 'header');
            expect(h1).toHaveLength(1);
        })

        it('Should render a desc', () => {
            const desc = findByTestAtrr(wrapper, 'desc');
            expect(desc).toHaveLength(1);
        })
    })

    describe('Have NO props', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setUp();
        })

        it ('Should not render without props', () => {
            const component = findByTestAtrr(wrapper, 'HeadlineComponent');
            expect(component).toHaveLength(0);
        })
    })
})