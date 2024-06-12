import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ date, title, price: exPrice }) => {

  // 함수 선언

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

 // 이벤트 핸들러 선언
 const clickHandler = e => {
  console.log('클릭함!');
  console.log(e.target.previousElementSibling.firstElementChild.textContent);

  // 이벤트 핸들러는 버튼이 그려진 이후기 때문에 다 잡아올 수 있음
  // const $price = document.querySelectorAll('.expense-item__price');
  // console.log($price);
};

  

  return (
      <Card className='expense-item'>
        <ExpenseDate exDate={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{formattedPrice}원</div>
        </div>
        <button id='btn' onClick={clickHandler}>버튼1</button>
        <button id='btn2' onMouseOver={e => alert('하하!')}>버튼2</button>
      </Card>
  )
}

export default ExpenseItem