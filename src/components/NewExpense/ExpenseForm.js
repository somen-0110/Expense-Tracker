import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleUpdated, setTitleUpdated] = useState("");
  const [dateUpdated, setDateUpdated] = useState("");
  const [amountUpdated, setAmountUpdated] = useState("");
  const titleChangeHandler = (event) => {
    setTitleUpdated(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDateUpdated(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmountUpdated(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const dataSet = {
      title: titleUpdated,
      amount: amountUpdated,
      date: new Date(dateUpdated),
      id: Math.random(),
    };
    props.onAdd(dataSet);
    setAmountUpdated("");
    setTitleUpdated("");
    setDateUpdated("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={titleUpdated}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amountUpdated}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={dateUpdated}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
