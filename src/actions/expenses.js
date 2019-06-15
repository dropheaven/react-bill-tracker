export const addExpense = ({ id, name, amount, createdAt = 0 } = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id,
    name,
    amount,
    createdAt
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
