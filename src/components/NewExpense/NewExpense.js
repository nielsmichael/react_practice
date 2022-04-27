import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // bad practice to use math.random but will suffice for now
    };
    props.onAddExpense(expenseData);
  };

  const resetState = () => {
    setIsDisplayed(false);
  };

  if (isDisplayed === false) {
    return (
      <div className="new-expense">
        <button onClick={() => setIsDisplayed(true)}>Add Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        cancel={resetState}
        onSaveExpenseData={
          saveExpenseDataHandler //points to handler function, does not execute unless this props is activated in the child component
        }
      />
    </div>
  );
};

export default NewExpense;
