import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpenseForm = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addExpense({ name, amount, date }));
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Название"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Сумма"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Добавить расход</button>
    </form>
  );
};

export default AddExpenseForm;
