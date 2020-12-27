import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

// as our tests grow, we don't want repeititve code, so we can create a setup funciton.
const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

const findByTestAtrr = (component, attribute) => {
    return component.find(`[data-test='${attribute}']`);
}

describe('Header Component', () => {
    let component;
    // beforeEach: tells us what to do before each of the it tests. The beforeEach runs before every single test. 
    beforeEach(() => {
        component = setUp();
    })

    it('should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'headerComponent'); // this is great, but if someone comes and changes the class name, this test will still fail despite the component rendering fine. 
        // Therefore, using classNames in tests is not that great, using a custom data-test attribute is better. 
        // console.log('component: ', component.debug());
        expect(wrapper.length).toBe(1);
    })

    it('should render a logo successfully', () => {
        const wrapper = findByTestAtrr(component, 'logoIMG');
        expect(wrapper.length).toBe(1);
    })
})
