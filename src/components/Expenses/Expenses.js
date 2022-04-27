import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedFilterYear}
          liftSelectedYear={listenToYear}
        />
        <ExpenseList items={filteredItems} />
      </Card>
    </div>
  );
};

export default Expenses;
