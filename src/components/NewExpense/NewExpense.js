import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // bad practice to use math.random but will suffice for now
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onSaveExpenseData={
          saveExpenseDataHandler //points to handler function, does not execute unless this props is activated in the child component
        }
      />
    </div>
  );
};

export default NewExpense;
