import React from 'react';
import BudgetForm from './BudgetForm';
import ExpenseForm from './ExpenseForm';
import BudgetSummary from './BudgetSummary';
import ExpenseList from './ExpenseList';

const BudgetPlanner = () => {
  return (
    <div>
        <div style={{display:'flex', gap:'100px'}}> 
            <BudgetForm />
            <BudgetSummary />
        </div>
      <ExpenseForm />
      <ExpenseList />
    </div>
  );
};

export default BudgetPlanner;
