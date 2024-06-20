import React from 'react';
import './scss/TodoHeader.scss';

const TodoHeader = ({ count }) => {
  

  // 년, 월, 일 구하기
  const date = new Date();
  const formattedDate = `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;

  // 요일 구하기
  const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  let day = week[date.getDay()];


  return (
    <header>
      <h1>{formattedDate}</h1>
      <div className='day'>{day}</div>
      <div className='tasks-left'>할 일 {count}개 남음</div>
    </header>
  );
};

export default TodoHeader;