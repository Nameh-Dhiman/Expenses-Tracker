import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [curYear, setCurYear] = useState("2020");
  const getYearHandler = (selectedYear) => {
    setCurYear(selectedYear);
  };
  const filteredData = props.data.filter((el) => {
    return el.date.getFullYear().toString() === curYear;
  });

  
  return (
    <>
      <Card className="expenses">
        <ExpenseFilter setSelected={curYear} getYear={getYearHandler} />
        <ExpensesChart expenses={filteredData}/>
        <ExpensesList filteredData={filteredData}/>
      </Card>
    </>
  );
}

export default Expenses;
