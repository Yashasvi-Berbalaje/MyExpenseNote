import Selector from '../../selectors/expenseSelector';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Test case for TextMatch',()=>{
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const action=Selector(expenses,filters);
    expect(action).toEqual([expenses[2],expenses[1]])

})
test('Test case for startDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:undefined
    }
    const action=Selector(expenses,filters);
    expect(action).toEqual([expenses[2],expenses[0]])

})
test('Test case for endDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:moment(0).add(5,'days')
    }
    const action=Selector(expenses,filters);
    expect(action).toEqual([expenses[2],expenses[0],expenses[1],])

})
test('Test case for SortByDate',()=>{
    const filters={
        text:'',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    }
    const action=Selector(expenses,filters);
    expect(action).toEqual([expenses[2],expenses[0],expenses[1]])

})
test('Test case for SortByAmount',()=>{
    const filters={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
    const action=Selector(expenses,filters);
    expect(action).toEqual([expenses[1],expenses[2],expenses[0]])
})