import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({ onAdd }) => {

  // 입력값 상태관리
  const [enteredText, setEnteredText] = useState('');

  // 입력값 바뀔 때 이벤트 핸들러
  const goalAddHandler = e => {
    setEnteredText(e.target.value);
  }

  // 폼 전송 이벤트 핸들러
  const formSubmitHandler = e => {
    e.preventDefault();

    const newGoalObject = {
      id: Math.random().toString(),
      text: enteredText
    };
    console.log(newGoalObject);

    // 부모 컴포넌트로 데이터 보내기
    onAdd(newGoalObject);

    // input 비우기
    setEnteredText('');
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>나의 목표</label>
        <input type="text"
        value={enteredText}
        onChange={goalAddHandler}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
