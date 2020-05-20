import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from '../actions/filters';
import {DateRangePicker} from 'react-dates';
import {v4 as uuidv4} from 'uuid';


export class ExpenseListFilter extends Component{

    state = {
        calenderFocus:null
    }
    onDatesChange=({startDate,endDate})=>{
        this.setState(()=>{
            this.props.setStartDate(startDate)
            this.props.setEndDate(endDate)
        })
    }
    onFocusChange=(focusedInput)=>{
      this.setState({calenderFocus:focusedInput})
    }
    onTextChange=(event)=>{
        this.props.setTextFilter(event.target.value)
    }
    onSortChange=(event)=>{
        event.target.value==='date'? this.props.sortByDate():this.props.sortByAmount();
   }
    render(){
        return(
            <div>
            <input type='text' value={this.props.filters.text}
            onChange={this.onTextChange}
            />
            <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                <option value='date'>Date</option>
                <option value='amount'>Amount</option>
            </select>
            <DateRangePicker
            startDate={this.props.filters.startDate}
            startDateId={uuidv4()}
            endDateId={uuidv4()}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calenderFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={()=>false}
            />
            </div>
        )
    }
}


const mapStateToProps = (state) =>
    ({
        filters:state.filter
    })

const mapDispatchToProps = (dispatch) =>({
      setTextFilter:(text)=>dispatch(setTextFilter(text)),
      sortByDate:()=>dispatch(sortByDate()),
      sortByAmount:()=>dispatch(sortByAmount()),
      setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
      setEndDate:(endDate)=>dispatch(setEndDate(endDate))
})



export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilter)