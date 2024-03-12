

const initialState = {
  text: '',
  sortBy: 'date', 
};

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    default:
      return state;
  }
};

export default filtersReducer;
