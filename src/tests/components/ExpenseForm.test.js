import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm.js';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import moment from 'moment';
 
test('test case for ExpenseForm',()=>{
    const action=shallow(<ExpenseForm/>);
    expect(toJSON(action)).toMatchSnapshot();
}) 

test('Test case for expenseform with expense data',()=>{
  const action=shallow(<ExpenseForm expense={expenses[1]}/>);
  expect(toJSON(action)).toMatchSnapshot();
})

test('test case for invalid form for error display',()=>{
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(toJSON(wrapper)).toMatchSnapshot();
})

test("Test case for Input type description",()=>{
    const value="New Description";
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value);
})
test("Test case for Input type description",()=>{
    const value="New Note";
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('expenseNote')).toBe(value);
})

test('Test case for amount change with valid value',()=>{
    const value='23.50';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value);
})
test('Test case for amount change with valid value',()=>{
    const value='23.505';
    const wrapper=shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('');
})

test('Test case for OnSubmit',()=>{
    const OnSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={OnSubmitSpy}/>);
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    });
    expect(OnSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });
})
