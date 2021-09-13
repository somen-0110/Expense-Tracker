import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const addExpenseHandler = (dataSet) => {
    props.onAddExpense(dataSet);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onAdd={addExpenseHandler} />
    </div>
  );
};

export default NewExpense;
