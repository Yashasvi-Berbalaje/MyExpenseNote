
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
                
               return{...expense,...action.update} 
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

export default expenseReducer;