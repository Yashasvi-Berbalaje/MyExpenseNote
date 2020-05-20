import React, { Component } from 'react';
import {connect} from 'react-redux';
import {AddExpense} from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class AddExpenseComponent extends Component{
  onSubmit=(expense)=>{
    this.props.AddExpense(expense)
    this.props.history.push('/Dashboard');
  }
  render(){
    return(
    <div>
     <h1>Add Expense</h1>
     <ExpenseForm onSubmit={this.onSubmit}/>
    </div>
    )
  }
}


  const mapDispatchToProps=(dispatch)=>({
    AddExpense:(expense)=>dispatch(AddExpense(expense))
  })

export default connect(undefined,mapDispatchToProps)(AddExpenseComponent);