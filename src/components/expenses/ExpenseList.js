import React from 'react'
import ExpenseItem from './ExpenseItem'
import ExpenseFilter from './ExpenseFilter'

const ExpenseList = ({ expenses }) => {

  const onFilterChange = (filteredYear) => {
    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력!
    console.log(filteredYear);
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
    <div className='expenses'>

      <ExpenseFilter onChangeFilter={onFilterChange}/>

      { expenses
          .map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />) 
      }

    </div>
  )
}

export default ExpenseList