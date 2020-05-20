import FilterReducer from '../../reducers/filters';
import moment from 'moment';


test('Testing for default Filter values',()=>{
    const state=FilterReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({
    text: '',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
    })

})
test('Testing for SortByDate',()=>{
    const forDate={
    text: '',
    sortBy:'amount',
    startDate:undefined,
    endDate:undefined
    }
    const state=FilterReducer(forDate,{type:'SORT_BY_DATE'});
    expect(state.sortBy).toBe('date')

})
test('Testing for SortByAmount',()=>{
    const state=FilterReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount')

})

test('Testing for Text',()=>{ 
    const state=FilterReducer(undefined,{type:'SET_TEXTFILTER',text:'Rent'});
    expect(state.text).toBe('Rent')
})
test('Testing for StartDate',()=>{ 
    const state=FilterReducer(undefined,{type:'SET_START_DATE',startDate:1000});
    expect(state.startDate).toBe(1000)
})
test('Testing for EndDate',()=>{ 
    const state=FilterReducer(undefined,{type:'SET_END_DATE',endDate:2000});
    expect(state.endDate).toBe(2000)
})