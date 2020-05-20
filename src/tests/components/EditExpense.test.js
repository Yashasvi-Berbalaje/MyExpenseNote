import React from 'react';
import {shallow} from 'enzyme';
import {EditExpense } from '../../components/EditExpense';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';

beforeEach(()=>{
    editExpense=jest.fn();
    removeExpense=jest.fn();
    history={push:jest.fn()};
    wrapper=shallow(
    <EditExpense
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}
    expense={expenses[2]}
    />);
})

test('should test for editExpensePage',()=>{
    expect(wrapper).toMatchSnapshot()
})
