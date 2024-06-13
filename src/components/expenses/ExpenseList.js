import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'

const ExpenseList = ({ expenses }) => {

  // 선택된 연도로 재 렌더링하기위해 연도를 상태값으로 관리
  const [filteredYear, setFilteredYear] 
          = useState(new Date().getFullYear().toString());

  const onFilterChange = (filteredYear) => {
    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력!
    console.log(filteredYear);
    setFilteredYear(filteredYear);
  }

  // App.js에서 받은 expense 배열을 <ExpenseItem> 배열로 변환하는 함수
  // 함수 만들지 않고 한번에 return에 넣어줄 수 있음
  const convertToComponentArray = () => {
    // return expenses
    //       .map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />);
    
    // const newArray = [];
    // for (const ex of expenses) {
    //   const tag = <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />;
    //   newArray.push(tag);
    // }
    // return newArray;
  };

  return (
    <div className="expenses">

        <ExpenseFilter onChangeFilter={onFilterChange}/>
        { expenses
            .filter(ex => ex.date.getFullYear().toString() === filteredYear)
            .map(ex =>
            <ExpenseItem
                key={Math.random().toString()} // 여러개의 컴포넌트를 구분하기 위한 랜덤값. db에 있는 pk를 씀
                title={ex.title}
                price={ex.price}
                date={ex.date}
            />)}

    </div>
);

};

export default ExpenseList