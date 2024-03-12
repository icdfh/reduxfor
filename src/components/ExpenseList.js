import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseItem from './ExpenseItem';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = () => {
  const expenses = useSelector(state => state.expenses);
  const filters = useSelector(state => state.filters);
  const visibleExpenses = getVisibleExpenses(expenses, filters);

  return (
    <div>
      {visibleExpenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
};

export default ExpenseList;