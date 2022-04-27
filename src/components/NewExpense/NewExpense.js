import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isDisplayed, setIsDisplayed] = useState(false); // useState to control form display
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(), // bad practice to use math.random but will suffice for now
    };
    props.onAddExpense(expenseData);
  };

  const resetState = () => {
    //called when 'cancel' button is clicked
    setIsDisplayed(false);
  };

  return (
    <div className="new-expense">
      {!isDisplayed && (
        <button onClick={() => setIsDisplayed(true)}>Add Expense</button>
      )}
      {isDisplayed && (
        <ExpenseForm
          cancel={
            resetState //calls reset
          }
          onSaveExpenseData={
            saveExpenseDataHandler //points to handler function, does not execute unless this props is activated in the child component
          }
        />
      )}
    </div>
  );
};

export default NewExpense;
