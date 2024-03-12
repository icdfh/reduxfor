
import React from 'react';
import { useSelector } from 'react-redux';

const TotalExpenses = () => {
  const expenses = useSelector(state => state.expenses);
  const total = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);

  return (
    <div>
      <h3>Общая сумма расходов: {total}</h3>
    </div>
  );
};

export default TotalExpenses;
