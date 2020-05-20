import React, { Component } from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {EditExpense, removeExpense} from '../actions/expenses';

export class EditExpenseComponent extends Component{
  onSubmit=(expense)=>{
    this.props.editExpense(this.props.expense.id,expense);
    this.props.history.push('/Dashboard');
  }
  onRemove=()=>{
    this.props.removeExpense({id:this.props.expense.id});
    this.props.history.push('/Dashboard');
}

  render(){
    return(
    <div>
     <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/> 
      <button onClick={this.onRemove}>Remove</button>
    </div>
    )
  }
}


  const mapStateToProps = (state,props) =>{
     return{
       expense:state.expenses.find((expense)=>expense.id===props.match.params.id)
  }
  }
  const mapDispatchToProps = (dispatch) =>{
      return{
        editExpense:(id,expense)=>dispatch(EditExpense(id,expense)),
        removeExpense:(id)=>dispatch(removeExpense(id))
      }
  }

 

export default connect(mapStateToProps,mapDispatchToProps)(EditExpenseComponent);