import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

// 디스트럭쳐링으로 데이터 받아옴
const ExpenseItem = ({ date, title, price: exPrice }) => {

  // 함수 선언

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  const makeFormattedDate = () => {

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

  return (
    <div className='expense-item'>
      <ExpenseDate exDate={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{formattedPrice}원</div>
      </div>
    </div>
  )
}

export default ExpenseItem