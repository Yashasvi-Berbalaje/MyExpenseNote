import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

test('Test case for Expense List Item',()=>{
    const action = shallow(<ExpenseListItem {...expenses[1]}/>)
    expect(toJSON(action)).toMatchSnapshot();
})
