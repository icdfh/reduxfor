

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeExpense, editExpense } from '../actions/expenses';

const ExpenseItem = ({ id, name, amount, date }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedAmount, setEditedAmount] = useState(amount);
  const [editedDate, setEditedDate] = useState(date);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editExpense(id, { name: editedName, amount: editedAmount, date: editedDate }));
    setIsEditing(false);
  };

  const handleRemove = () => {
    dispatch(removeExpense(id));
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={editedName} onChange={(e) => setEditedName(e.target.value)} />
          <input type="number" value={editedAmount} onChange={(e) => setEditedAmount(e.target.value)} />
          <input type="date" value={editedDate} onChange={(e) => setEditedDate(e.target.value)} />
          <button onClick={handleEdit}>Сохранить</button>
          <button onClick={() => setIsEditing(false)}>Отмена</button>
        </div>
      ) : (
        <div>
          <span>{name}</span>
          <span>{amount}</span>
          <span>{date}</span>
          <button onClick={() => setIsEditing(true)}>Редактировать</button>
          <button onClick={handleRemove}>Удалить</button>
        </div>
      )}
    </div>
  );
};

export default ExpenseItem;
