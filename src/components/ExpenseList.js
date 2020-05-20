import React from 'react';
import {connect} from  'react-redux';
import ExpenseListItem from './ExpenseListItem';
import  SelectorExpense  from '../selectors/expenseSelector';


export const ExpenseList = (props) =>(
    <div>
    {
        props.expenses.length ===0 ?
      (<p>No expenses</p>):(props.expenses.map((expense)=>(<ExpenseListItem key={expense.id} {...expense}/>)))  
    }
    </div>
    )


const mapStateToProps=(state)=>{
    return{
        expenses:SelectorExpense(state.expenses,state.filter)
   };
}

export default connect(mapStateToProps)(ExpenseList)