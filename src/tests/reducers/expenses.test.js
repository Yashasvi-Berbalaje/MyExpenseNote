import expensesFixture from '../fixtures/expenses';
import expenseReducer from '../../reducers/expenses';
import moment from 'moment';

test('Testing for default',()=>{
    const state=expenseReducer(undefined,{type:'@@INIT'});
   expect(state).toEqual([]); 
})
test('Testing for Remove Expense',()=>{
    const action ={
        type:'REMOVE',
        id:'2'
    }
    const state=expenseReducer(expensesFixture,action);
    expect(state).toEqual([expensesFixture[0],expensesFixture[2]]);
})
test('Testing for Remove Expense',()=>{
    const action ={
        type:'REMOVE',
        id:'4'
    }
    const state=expenseReducer(expensesFixture,action);
    expect(state).toEqual([expensesFixture[0],expensesFixture[1],expensesFixture[2]]);
})
test('Testing for Add Expense',()=>{
    const expenses={
           id:4,
          description:'Pizza',
          amount:400,
          note:'',
          createdAt:1000
    }
    const action ={
        type:'ADD',
        expenses
    }
    const state=expenseReducer(expensesFixture,action);
    expect(state).toEqual([expensesFixture[0],expensesFixture[1],expensesFixture[2],{id:4,
        description:'Pizza',
        amount:400,
        note:'',
        createdAt:1000}]);
})
test('Testing for Edit Expense',()=>{
    const action ={
        type:'EDIT_EXPENSE',
        id:expensesFixture[1].id,
        update:{
          description:'Mango',
          note:'price for mango'
        }
    }
    const state=expenseReducer(expensesFixture,action);
    expect(state).toEqual([expensesFixture[0],{description:'Mango',
    note:'price for mango',
    id:'2',
    amount:10000,
    createdAt:moment(0).subtract(4,'days').valueOf(),
},expensesFixture[2]]);
})
test('Testing for Edit Expense for wrong id',()=>{
    const action ={
        type:'EDIT_EXPENSE',
        id:'6',
        update:{
          description:'Mango',
          note:'price for mango'
        }
    }
    const state=expenseReducer(expensesFixture,action);
    expect(state).toEqual([expensesFixture[0],expensesFixture[1],expensesFixture[2]]);
})