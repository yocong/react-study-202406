import "./App.css";
import React from "react";
import ExpenseItem from "./components/expenses/ExpenseItem";

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
      date: new Date(2024, 6 - 1, 7),
    },
    {
      title: "헬스장등록",
      price: 300000,
      date: new Date(2024, 6 - 1, 12),
    },
  ];
  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </>
  );
};

export default App;
