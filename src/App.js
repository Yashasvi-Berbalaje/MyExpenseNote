import React from 'react';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';
import configureStore from './store/ConfigStore';
import {AddExpense,removeExpense,EditExpense} from './actions/expenses';
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from './actions/filters';
import getVisibleExpenses from './selectors/expenseSelector';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.dispatch(AddExpense({description:'water bill',amount:300,createdAt:1000}));
store.dispatch(AddExpense({description:'Gas bill',amount:600,createdAt:10}));
store.dispatch(AddExpense({description:'Rent',amount:100,createdAt:10000}));
const state = store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses,state.filter);

console.log(visibleExpenses);

  


const App = () =>(
    <div>
    <Provider store={store}>
      <AppRouter />
      </Provider>
      </div>
)
 
export default App;
