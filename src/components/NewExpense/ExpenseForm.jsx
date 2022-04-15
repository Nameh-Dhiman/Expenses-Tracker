import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [curTitle, setCurTitle] = useState("");
  const [curAmount, setCurAmount] = useState("");
  const [curDate, setCurDate] = useState("");

  const titleHandler = (event) => {
    setCurTitle(event.target.value);
  };

  const amountHandler = (event) => {
    setCurAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setCurDate(event.target.value);
  };

  const clearForm = () => {
    setCurTitle("");
    setCurAmount("");
    setCurDate("");
    props.closeForm();
  };

  const formHandler = (event) => {
    event.preventDefault();
    let expenseData = {
      title: curTitle,
      amount: +curAmount,
      date: new Date(curDate),
    };
    props.saveData(expenseData);
    clearForm();
  };


  return (
    <form onSubmit={formHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={curTitle}
            placeholder="Expense title..."
            onChange={titleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountHandler}
            value={curAmount}
            placeholder="Expense amount..."
            type="number"
            min="0.00"
            step="0.50"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateHandler}
            type="date"
            value={curDate}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={clearForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
