import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';
import toJSON from 'enzyme-to-json';

test('Test case for Not Found Page',()=>{
    const action= shallow(<NotFoundPage/>);
    expect(toJSON(action)).toMatchSnapshot();
})