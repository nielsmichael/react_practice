import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const updateTitle = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredAmt, setEnteredAmt] = useState("");
  const updateAmt = (e) => {
    setEnteredAmt(e.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");
  const updateDate = (e) => {
    setEnteredDate(e.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={updateTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={updateAmt} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={updateDate}
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
