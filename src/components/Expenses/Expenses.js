import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";
// import NewExpense from "../NewExpense/NewExpense";

const Expenses = (props) => {
  let DUMMY_YEAR = 2020;
  const [filteredYear, setFilteredYear] = useState(DUMMY_YEAR);
  const filterChangeFilter = (value) => {
    setFilteredYear(value);
  };
  const filteredData = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeFilter} />
        <Chart data={filteredData} />
        <ExpensesList item={filteredData} />
      </Card>
    </li>
  );
};
export default Expenses;
