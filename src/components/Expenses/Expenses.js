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

  return (
    <div>
      <ExpensesFilter
        selected={selectedFilterYear}
        liftSelectedYear={listenToYear}
      />
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          cost={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          cost={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          cost={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          cost={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
