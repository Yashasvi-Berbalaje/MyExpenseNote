import {createStore,combineReducers} from 'redux';
import expenseReducer from '../reducers/expenses';
import FilterReducer from '../reducers/filters';

export default () =>{
const store=createStore(combineReducers({
    expenses:expenseReducer,
    filter:FilterReducer
}),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
return store;
}
