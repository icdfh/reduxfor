import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilterText } from '../actions/filters';

const FilterComponent = () => {
  const dispatch = useDispatch();

  const onTextChange = (e) => {
    dispatch(setFilterText(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Фильтр по названию"
      onChange={onTextChange}
    />
  );
};

export default FilterComponent;