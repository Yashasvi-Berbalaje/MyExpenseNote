import {createStore} from 'redux';
import React,{ Component } from 'react';

class Store extends Component{
    render(){return(<p></p>)};
}
/*
const incrementCount = ({incrementBy=1}={}) =>({
      type : 'INCREMENT',
      incrementBy
})
const decrementCount = ({decrementBy:decrement=1}={}) =>({
    type:'DECREMENT',
    decrement
})
const resetCount = () =>({
    type: 'RESET'
})
const setCount = ({count=1}={}) =>({
    type:'SET',
    count
})
const countReducer=(state={count:0},action)=>{
    switch(action.type){
    case 'INCREMENT':
        return{
            count:state.count+action.incrementBy
        }
    case 'DECREMENT':
        return{
            count:state.count-action.decrement
        }
    case 'SET':
        return{
            count:action.count
        }
    case 'RESET':
        return{
            count: 0
        }
    default: return state 
    }
  
}

const store = createStore(countReducer);
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(incrementCount({incrementBy:5}));
store.dispatch(incrementCount());

store.dispatch(resetCount())
store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(decrementCount());
store.dispatch(setCount({count:1000}))

/*
const Person={
    name:'Yashasvi',
    age:19,
    location:{
        city:'Mangalore',
        temp:30+'*'
    }
}
const {name :Name,age :Age}=Person;
const {city,temp}=Person.location;
console.log(`${Name} is ${Age} lives in ${city}`);
console.log(`It is  ${temp} here`);*/
/*
const Book={
    title:'Ego is the Enemy',
    author:'Ryan Holiday',
    publisher:{
       // name:'Penguin'
    }
}
const {name:Name ='Self-Published'}=Book.publisher;
console.log(Name);*/

/*const address=['machina Street','Mangalore','Karnataka','574224'];
const [,Taluk='Mangalore',State]=address
console.log(`You are in ${Taluk} ${State}`);

const item=['Coffee(hot)','$'+2.50,'$'+2.75,'$'+3.00];
const [itemName,Small,Medium,Large='$'+5]=item;
console.log(`The price of ${itemName} is ${Small}(Small)`);
console.log(`The price of ${itemName} is ${Medium}(Medium)`);
console.log(`The price of ${itemName} is ${Large}(Large)`);
*/
export default Store;
