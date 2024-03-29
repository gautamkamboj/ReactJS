import React, { createContext } from 'react';

export const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const fixedBudget = 2000; // Fixed budget value
  const [budgets, setBudgets] = React.useState([{ category: 'Fixed Budget', amount: fixedBudget }]);
  const [expenses, setExpenses] = React.useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const removeExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Other functions for updating budgets and expenses

  return (
    <BudgetContext.Provider value={{ budgets, setBudgets, expenses, setExpenses, addExpense, removeExpense }}>
      {children}
    </BudgetContext.Provider>
  );
};
