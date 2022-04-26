import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2020");

  const listenToYear = (selectedYear) => {
    setSelectedFilterYear(selectedYear);
  };

  const filteredItems = props.items.filter((item) => {
    if (selectedFilterYear === "All") {
      return item;
    } else {
      return item.date.getFullYear().toString() === selectedFilterYear;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilterYear}
          liftSelectedYear={listenToYear}
        />
        {filteredItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            cost={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
