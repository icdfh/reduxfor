const getVisibleExpenses = (expenses, { text, sortBy }) => {
    return expenses.filter(expense => 
      expense.name.toLowerCase().includes(text.toLowerCase())
    ).sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.date) - new Date(b.date); 
      } else if (sortBy === 'amount') {
        return b.amount - a.amount; 
      }
    });
  };
  
  export default getVisibleExpenses;