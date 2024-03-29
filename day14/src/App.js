import React from 'react';
import BudgetPlanner from './components/BudgetPlanner';
import { BudgetProvider } from './context/BudgetContext';

function App() {
  return (
    <BudgetProvider>
      <div className="App">
        <BudgetPlanner />
      </div>
    </BudgetProvider>
  );
}

export default App;