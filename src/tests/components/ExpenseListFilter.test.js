import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilter} from '../../components/ExpenseListFilter';
import {filter,altFilter} from '../fixtures/filters';

let setTextFilter,setStartDate,setEndDate,sortByDate,sortByAmount;

beforeEach(()=>{
    
})

test('Test case for ExpenseListFilter',()=>{
    setTextFilter=jest.fn();
    sortByDate=jest.fn();
    sortByAmount=jest.fn();
    setStartDate=jest.fn();
    setEndDate=jest.fn()
    wrapper=shallow(
        <ExpenseListFilter
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />
    )
    expect(wrapper).toMatchSnapshot;
})