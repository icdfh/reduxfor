import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AddExpenseForm from './components/AddExpenseForm';
import ExpenseList from './components/ExpenseList';
import FilterComponent from './components/FilterComponent';
import SortComponent from './components/SortComponent';
import TotalExpenses from './components/TotalExpenses';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Приложение для учета расходов</h1>
        <AddExpenseForm />
        <FilterComponent />
        <SortComponent />
        <ExpenseList />
        <TotalExpenses />
      </div>
    </Provider>
  );
};

export default App;