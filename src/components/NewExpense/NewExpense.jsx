import './NewExpense.css';
import ExpenseForm from './ExpenseForm'
import {useState} from 'react';

const NewExpense = (props) => {
   const [addNew, setAddNew] = useState(false);
    const saveDataHandler = (data) => {
        let expenseData = {...data,id:Math.random().toString()}
        props.getData(expenseData);
    };

    const displayForm = () => {setAddNew(true)};

    const closeForm = () => {setAddNew(false)};

    return (
      <div className="new-expense">
        {!addNew ? (
          <button onClick={displayForm}>Add new Expenses</button>
        ) : (
          <ExpenseForm saveData={saveDataHandler} closeForm={closeForm}/>
        )}
      </div>
    );
} 
export default NewExpense;