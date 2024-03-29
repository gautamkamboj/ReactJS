import React, { useContext } from 'react';
import { BudgetContext } from '../context/BudgetContext';

const ExpenseList = () => {
  const { expenses, setExpenses } = useContext(BudgetContext);
  const removeExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
  };
  return (
    <div>
     
      <div>
        <h3>Expenses:</h3>
        <ul>
          {expenses.map(expense => (
            <li key={expense.id}>
              {expense.category} - ${expense.amount}
              <button onClick={() => removeExpense(expense.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseList;
