
export const addExpense = ({ name, amount, date }) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: Date.now(), 
      name,
      amount,
      date,
    },
  });
  
 
  export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id,
  });
  
  
  export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
  });
  