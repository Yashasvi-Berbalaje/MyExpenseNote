import React, { Component } from 'react';
import 'react-dates/initialize';
import moment from 'moment';
import {SingleDatePicker} from  'react-dates';

export default class ExpenseForm extends Component{
    constructor(props){
        super(props);
        this.state={
            description:props.expense? props.expense.description:'',
            expenseNote:props.expense? props.expense.note:'',
            amount:props.expense?(props.expense.amount/100).toString():'',
            createdAt:props.expense?moment(props.expense.createdAt):moment(),
            calenderFocus:false,
            error:''
        }

    }
  

    onDescriptionChange = (event) =>{
        const description=event.target.value
        this.setState(()=>({description}))
    }
    onAddExpenseNoteChange = (event) =>{
        const expenseNote=event.target.value
        this.setState(()=>({expenseNote}))
    }
    onAmountChange = (event) =>{
        const amount=event.target.value
        if(!amount||amount.match(/^\d{1,}(\.\d{0,2})?$/)){
        this.setState(()=>({amount}))
    }
    }
    onDateChange = (createdAt) =>{
        if(createdAt)
        {
            this.setState(()=>({createdAt}));
        }
        
    }
    onFocusChange = ({focused}) =>{
        this.setState(()=>({calenderFocus:focused}))
    }
    onSubmit = (event) =>{
        event.preventDefault();
        if(!this.state.description||!this.state.amount){
            this.setState(()=>{
                return{
                    error:'please enter all required fields'
                }
            })
        }
        else{
            this.setState(()=>{
                return{
                    error:''
                }
            })
         this.props.onSubmit({
             description:this.state.description,
             amount:parseFloat(this.state.amount,10)*100,
             createdAt:this.state.createdAt.valueOf(),
             note:this.state.expenseNote
         })
        }

    }

    render(){
        return(
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmit}>
               <input type='text' placeholder='Description' autoFocus value={this.state.description} onChange={this.onDescriptionChange} ></input>
               <input type='number' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} ></input>
               <SingleDatePicker
                 date={this.state.createdAt}
                 onDateChange={this.onDateChange}
                 focused={this.state.calenderFocus}
                 onFocusChange={this.onFocusChange}
                 numberOfMonths={1}
                 isOutsideRange={()=>false}       
               />
               <textarea placeholder='Add a note on expense' value={this.expenseNote} onChange={this.onAddExpenseNoteChange}></textarea>
               <button>Submit</button> 
               </form>
            </div>
        )
    }
}