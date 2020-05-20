import {NavLink} from 'react-router-dom';
import React from 'react';
 
  const Header = () =>(
    <div>
    <h1>Expensify</h1>
    <NavLink to='/Dashboard' activeClassName='is-active'>Home</NavLink>
    <NavLink to='/expense' activeClassName='is-active'>AddExpense</NavLink>
    </div>
  );
  export default Header;