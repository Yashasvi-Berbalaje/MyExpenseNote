import {BrowserRouter,Route,Switch} from 'react-router-dom';
import React from 'react';
import AddExpenseComponent from'../components/AddExpense';
import ExpenseDashboard from '../components/ExpenseDashboard';
import EditExpenseComponent from '../components/EditExpense';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
  
  const AppRouter = () =>(
   <div>
     <BrowserRouter>
     <Header/>
     <Switch>
     <Route path='/Dashboard'  exact={true}  component={ExpenseDashboard} />
     <Route path='/expense' component={AddExpenseComponent} />
     <Route path='/edit/:id' component={EditExpenseComponent} />
     <Route path='/help' component={HelpPage} />
     <Route  component={NotFoundPage} />
     </Switch>
      </BrowserRouter>
   </div>
  );

  export default AppRouter;