export const addExpense = ({ id, name, category, amount, dueDate } = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id,
    name,
    category,
    amount,
    dueDate
  }
});

export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});
