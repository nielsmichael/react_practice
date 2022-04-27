import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmt, setEnteredAmt] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // Alternative:
  //   const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmt: "",
  //   enteredDate: "",
  // });

  const updateTitle = (event) => {
    setEnteredTitle(event.target.value);
    // Alternative:
    // setUserInput((prev) => {
    //   return { ...prev, enteredTitle: event.target.value };
    // });
  };

  const updateAmt = (e) => {
    setEnteredAmt(e.target.value);
  };

  const updateDate = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault(); //prevent page reload

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmt,
      date: new Date(enteredDate), //parses date string, converts to Date object
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmt("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={updateTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmt}
            onChange={updateAmt}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={updateDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.cancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
