import { shallow } from 'enzyme';
import CardList from './CardList';
import React from 'react';
import toJson from 'enzyme-to-json';

const mockRobots = [
    {
        id: 1,
        name: "John",
        username: "JohnJohn",
        email: "John@gmail.com"
    }
]

it("expect to render CardList component with 1 robot", () => {
    const wrapper = shallow(<CardList robots={mockRobots} />);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(toJson(wrapper).children.length).toEqual(1);
})

it("expect to render CardList component with an empty list", () =>{
    const wrapper = shallow(<CardList robots={[]} />);
    expect(toJson(wrapper).children.length).toEqual(1);
})