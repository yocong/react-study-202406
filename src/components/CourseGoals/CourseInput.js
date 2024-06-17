import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../UI/Button';

const CourseInput = ({ onAdd }) => {

  // 목표 input에 입력한 값
  const [enteredText, setEnteredText] = useState('');

  // 입력값 검증을 통과했는지 여부를 상태관리
  const [isValid, setIsValid] = useState(true);

  // 입력값 바뀔 때 이벤트 핸들러
  const goalAddHandler = e => {

    const inputValue = e.target.value;

    // 입력값 검증
    if (inputValue.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredText(inputValue);

  };

  // 폼 전송 이벤트 핸들러
  const formSubmitHandler = e => {
    e.preventDefault();

    if (enteredText.trim().length === 0) {
      setIsValid(false);
      return;
    }

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
      <div className={`form-control ${isValid ? '' : 'invalid'}`}>
        <label>나의 목표</label>
        <input type="text"
        onChange={goalAddHandler}
        value={enteredText}
        />
      </div>
      <Button type="submit">목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;
