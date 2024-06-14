import "./App.css";
import React, {useState} from "react";
import ExpenseList from "./components/expenses/ExpenseList";
import NewExpense from "./components/new-expense/NewExpense";

// 서버에서 데이터를 받아오는 곳
const App = () => {
  // 서버에서 지출항목 JSON 배열을 응답받음
  const expenses = [
    {
      title: "치킨먹음",
      price: 30000,
      date: new Date(2024, 6 - 1, 3),
    },
    {
      title: "족발먹음",
      price: 40000,
      date: new Date(2023, 12 - 1, 7),
    },
    {
      title: "헬스장등록",
      price: 300000,
      date: new Date(2024, 6 - 1, 12),
    },
    {
      title: "파파존스",
      price: 40000,
      date: new Date(2022, 3 - 1, 4),
    },
    {
      title: "파리채",
      price: 1500,
      date: new Date(2023, 1 - 1, 2),
    },
  ];

  // 배열을 상태변수로 관리 (화면에 실시간 렌더링 되기 위함)
  // -> expenses 대신 상태변수인 expenseList로 관리
  const [expenseList, setExpenseList] = useState(expenses)

  // ExpenseForm에게 내려보낼 함수
  const onAddExpense = (userInput) => {
    console.log('App.js가 내려보낸 함수 호출!');
    
    expenseList.push(userInput);
    
    // setter로 변경감지 하려면 이전것 대신 새로운 배열을 넣어주어야함
    // ...expenseList : expenseList 복사본
    // [...expenseList, userInput] : 복사본에 userInput 추가
    setExpenseList([...expenseList, userInput]);

    console.log(expenseList);
  }

  return (
    <>
      <NewExpense onSave={onAddExpense} />
      <ExpenseList expenses={expenseList} />
    </>
  );
};

export default App;
