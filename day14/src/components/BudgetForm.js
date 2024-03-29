import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const BudgetForm = () => {
    const { expenses } = useContext(BudgetContext);

    // Calculate total spent
    const totalSpent = expenses.reduce((total, expense) => parseInt(total) + parseInt(expense.amount), 0);
  
    // Calculate remaining budget
    const fixedBudget = 2000; // Fixed budget value
    const remainingBudget = fixedBudget - totalSpent;
  
    return (
      <div>
        <h2>Budget Planner</h2>
        <div>
          <h3>Total Spent So Far: ${totalSpent}</h3>
          <h3>Remaining Budget: ${remainingBudget}</h3>
        </div>
        {/* Expense list and other components */}
      </div>
    );
};

export default BudgetForm;
