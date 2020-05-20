import {createStore,combineReducers} from 'redux';
import {v4 as uuidv4} from 'uuid';


const AddExpense = ({
    description='',
    note='',
    amount=0,
    createdAt=0
}) =>({
    type:'ADD',
    expenses:{
       id:uuidv4(),
       description,
       note,
       amount,
       createdAt
    }
})

const removeExpense = ({id}={}) =>({
    type:'REMOVE',
    id
})

const EditExpense = (id,amount) =>({
    type:'EDIT_EXPENSE',
    id,
    amount
})

const setTextFilter = (text='') =>({
    type:'SET_TEXTFILTER',
    text
})
const sortByAmount = ()  =>({
    type:'SORT_BY_AMOUNT'
})
const sortByDate = ()  =>({
    type:'SORT_BY_DATE'
}) 

const setStartDate = (startDate=undefined) =>({
    type:'SET_START_DATE',
    startDate
})
const setEndDate = (endDate) =>({
    type:'SET_END_DATE',
    endDate
})

const getVisibleExpenses = (expenses,{text,sortBy,startDate,endDate}) =>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number'||expense.createdAt >=startDate;
        const endDateMatch=typeof startDate!=='number'||expense.createdAt <=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
       return startDateMatch&&endDateMatch&&textMatch;  
    }).sort((a,b)=>{
        if(sortBy==='date')
        return a.createdAt < b.createdAt ? 1 : -1;
        else if(sortBy==='amount')
        return a.amount < b.amount ? 1 : -1;
    })

}
      


const expenseReducerDefaultState=[]
const expenseReducer = (state=expenseReducerDefaultState,action) => {
     switch(action.type){
        case 'ADD':
             return[...state,action.expenses];
        case 'REMOVE':
        return (state.filter(({id}) => id!==action.id));
        case 'EDIT_EXPENSE':
        return(
         state.map((expense)=>{
            if(expense.id===action.id)
            {
                
               return{...expense,...action.amount} 
            }
            else{
                return expense;
            }
         })   
        )
         default:
             return state;
     }
}
const FilterReducerDefaultState={
    text: '',
    sortBy:'Date',
    startDate:undefined,
    endDate:undefined
  };
const FilterReducer = (state = FilterReducerDefaultState,action) =>{
      switch(action.type){
        case 'SET_TEXTFILTER':
            return{...state,text:action.text};
        case 'SORT_BY_AMOUNT':
            return{...state,sortBy:'amount'};
        case 'SORT_BY_DATE':
            return{...state,sortBy:'date'};
        case 'SET_START_DATE':
            return{...state,startDate:action.startDate};
        case 'SET_END_DATE':
            return{...state,endDate:action.endDate};
       default:
           return state;
      }
}

const store=createStore(combineReducers({
    expenses:expenseReducer,
    filter:FilterReducer
}));

store.subscribe(()=>{
   const state=store.getState();
   const visibleExpenses=getVisibleExpenses(state.expenses,state.filter);
    console.log(visibleExpenses);
})

const expenseOne=store.dispatch(AddExpense({description:'rent',amount:300,createdAt:11000}));
const expenseTwo=store.dispatch(AddExpense({description:'coffee',amount:600,createdAt:-1000}));
/*
store.dispatch(removeExpense({id:expenseOne.expenses.id}));
store.dispatch(EditExpense(expenseTwo.expenses.id,{amount:500}));
*/
store.dispatch(sortByDate());
store.dispatch(sortByAmount());
store.dispatch(setTextFilter());
//store.dispatch(setStartDate(-1100));
//store.dispatch(setEndDate(1100));
/*
const demoState = {
    expenses:[{
        id:'posdpovpojsd',
        description:'January Rent',
        note:'This was the final payment for that address',
        amount:54500,
        createdAt:0
    }
    }],
    filter:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}*/