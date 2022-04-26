import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("All");

  const listenToYear = (selectedYear) => {
    setSelectedFilterYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    if (selectedFilterYear === "All") {
      //checks if all selected, renders all by default
      return item;
    } else {
      //filters by selected year
      return item.date.getFullYear().toString() === selectedFilterYear;
    }
  });

  // conditional rendering of results
  let expensesContent = <p>No expenses found.</p>;

  if (filteredItems.length > 0) {
    expensesContent = filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        cost={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilterYear}
          liftSelectedYear={listenToYear}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
