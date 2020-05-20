
import Header from '../../components/Header';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

test('Should test for Header',()=>{
    const wrapper = shallow(<Header/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})