import {setStartDate,setEndDate, sortByDate,sortByAmount, setTextFilter} from '../../actions/filters';
import moment from 'moment';

test('Test case for setStartDate',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})
test('Test case for setStartDate',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})
test('Test case for SortByAmount',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
       type:'SORT_BY_AMOUNT'
    })

})
test('Test case for SortByDate',()=>{
    const action =sortByDate();
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
    
})
test('Test case for SetTextFilter',()=>{
    const action=setTextFilter('Rent');
    expect(action).toEqual({
        type:'SET_TEXTFILTER',
        text:'Rent'
    })
    
})
test('Test case for SetTextFilter for default',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXTFILTER',
        text:''
    })
})