import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const BudgetSummary = () => {
  const { budgets } = useContext(BudgetContext);
  const totalBudget = budgets.reduce((acc, curr) => acc + parseInt(curr.amount), 0);

  return (
    <div>
      <h2>Budget Summary</h2>
      <p>Total Budget: ${totalBudget}</p>
    </div>
  );
};

export default BudgetSummary;
