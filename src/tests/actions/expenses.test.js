import {AddExpense,removeExpense,EditExpense} from '../../actions/expenses';
import { type } from 'os';

test('Test case for remove Expense',()=>{
     const result=removeExpense({id:'1234c'});
     expect(result).toEqual({
         type:'REMOVE',
         id:'1234c'
     })
})

test('Test case for Edit expense',()=>{
    const result=EditExpense('12345',{note:'this is simple note'});
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:'12345',
      update:{ 
          note:'this is simple note'
        }
    })
})

test('Test case for AddExpense with Values Supply',()=>{
    const ExpenseData={
        description:'rent',
        amount:2500,
        createdAt:1000,
        note:'This is expense for rent'
    }
    const action=AddExpense(ExpenseData);
    expect(action).toEqual({
        type:'ADD',
        expenses:{
            ...ExpenseData,
            id:expect.any(String)
        }
    })

})
test('Test case for AddExpense with Default Values',()=>{
   
    const action=AddExpense();
    expect(action).toEqual({
        type:'ADD',
        expenses:{
        description:'',
        amount:0,
        createdAt:0,
        note:'',
        id:expect.any(String)
        }
    })
})