import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';
import toJSON from 'enzyme-to-json';

test('Test Case for Expense Dashboard',()=>{
    const action=shallow(<ExpenseDashboard/>);
    expect(toJSON(action)).toMatchSnapshot;
})
