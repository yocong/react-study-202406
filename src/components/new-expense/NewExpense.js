import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSave }) => {
  
  const [toggle, setToggle] = useState(false);
  // 클릭했을 때 발생하는 이벤트 핸들러
  const startInsertModeHandler = (e) => {
    setToggle(true);
  };
  const stopInsertModeHandler = (e) => {
    setToggle(false);
  };

  let newExpenseContent = <button onClick={startInsertModeHandler}>새로운 지출 추가하기</button>
  if (toggle) {
    newExpenseContent = <ExpenseForm onAdd={onSave} onCancel={stopInsertModeHandler} />;
  }

  return (
    <div className="new-expense" >
      {newExpenseContent};
    </div>
  );
};

export default NewExpense;