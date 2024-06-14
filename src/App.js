import React, { useState } from "react";
import CourseInput from "./components/CourseGoals/CourseInput";
import CourseList from "./components/CourseGoals/CourseList";
import "./App.css";

// 기본 더미 데이터
const DUMMY_DATA = [
  {
    id: "g1",
    text: "리액트 컴포넌트 스타일링 마스터하기",
  },
  {
    id: "g2",
    text: "UI/UX 프로그래밍 쌉고수되기",
  },
];

const App = () => {

  const [goals, setGoals] = useState(DUMMY_DATA);

  // CourseInput에 내려보낼 함수
  const addGoalsHandler = (userInput) => {
    goals.push(userInput);

    // setter로 변경감지 하려면 새로운 배열을 넣어주어야함
    setGoals([...goals, userInput]);

    console.log(goals);
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalsHandler}/>
      </section>
      <section id="goals">
        <CourseList items={goals} />
      </section>
    </div>
  );
};

export default App;
