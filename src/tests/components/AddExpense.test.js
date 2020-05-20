import React from 'react';
import {shallow} from 'enzyme';
import {AddExpense} from '../../components/AddExpense';
import toJSON from 'enzyme-to-json';




test('test case for AddExpense',()=>{
    const AddExpense=jest.fn();
    const history={push:jest.fn()}
    const wrapper=shallow(<AddExpense AddExpense={AddExpense} history={history}/>)
    expect(toJSON(wrapper)).toMatchSnapshot();
})