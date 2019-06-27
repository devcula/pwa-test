import { shallow } from 'enzyme';
import Card from './Card';
import React from 'react';
import toJson from 'enzyme-to-json';

it("expect to render Card component", () => {
    const wrapper = shallow(<Card />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(toJson(wrapper).children.length).toEqual(2);
})