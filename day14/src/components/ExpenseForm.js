import React, { useContext, useState } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseForm = () => {
  const { expenses, addExpense } = useContext(BudgetContext);
  const [newExpense, setNewExpense] = useState({ category: '', amount: '' });

  const handleExpenseChange = (e) => {
    setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
  };

  const addNewExpense = () => {
    addExpense(newExpense);
    setNewExpense({ category: '', amount: '' });
  };

  return (
    <div>
      <h2>Add Expense</h2>
      <input type="text" name="category" placeholder="Category" value={newExpense.category} onChange={handleExpenseChange} />
      <input type="number" name="amount" placeholder="Amount" value={newExpense.amount} onChange={handleExpenseChange} />
      <button onClick={addNewExpense}>Add Expense</button>
    </div>
  );
};

export default ExpenseForm;
