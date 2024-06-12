import "./App.css";
import React from "react";
import ExpenseItem from "./components/expenses/ExpenseItem";

const App = () => {
  return (
    <>
      <ExpenseItem
        title={"치킨냠냠"}
        price={30000}
        date={new Date(2024, 6, 3)}
      />
      <ExpenseItem
        title={"족발야미"}
        price={40000}
        date={new Date(2024, 6, 7)}
      />
      <ExpenseItem
        title={"피자꺼억"}
        price={25000}
        date={new Date(2024, 6, 12)}
      />
    </>
  );
};

export default App;
