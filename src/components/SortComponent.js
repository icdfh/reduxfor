import React from 'react';
import { useDispatch } from 'react-redux';
import { sortByDate, sortByAmount } from '../actions/filters';

const SortComponent = () => {
  const dispatch = useDispatch();

  const onSortChange = (e) => {
    if (e.target.value === 'date') {
      dispatch(sortByDate());
    } else if (e.target.value === 'amount') {
      dispatch(sortByAmount());
    }
  };

  return (
    <select onChange={onSortChange}>
      <option value="date">По дате</option>
      <option value="amount">По сумме</option>
    </select>
  );
};

export default SortComponent;