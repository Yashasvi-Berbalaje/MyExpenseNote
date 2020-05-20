import React from 'react';
import {shallow } from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';
import toJSON from 'enzyme-to-json';

test('Test case for Expense List with Expenses',()=>{
    const action=shallow(<ExpenseList expenses={expenses}/>)
    expect(toJSON(action)).toMatchSnapshot()
})
test('Test case for Expense List item without Expenses',()=>{
    const action=shallow(<ExpenseList expenses={[]}/>)
    expect(toJSON(action)).toMatchSnapshot()
})