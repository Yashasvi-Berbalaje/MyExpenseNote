import {v4 as uuidv4} from 'uuid';

const AddExpense = ({
    description='',
    note='',
    amount=0,
    createdAt=0
}={}) =>({
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

const EditExpense = (id,update) =>({
    type:'EDIT_EXPENSE',
    id,
    update
})

export {AddExpense,removeExpense,EditExpense};