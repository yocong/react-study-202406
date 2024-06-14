import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

// 기본 더미 데이터
const DUMMY_DATA = [
  {
    id: 'g1',
    text: '리액트 컴포넌트 스타일링 마스터하기'
  },
  {
    id: 'g2',
    text: 'UI/UX 프로그래밍 쌉고수되기'
  },
];

const App = () => {

  const [goals, setGoals] = useState(DUMMY_DATA);

  // CourseInput에게 전달할 함수
  const addGoalHandler = (goalObject) => {
    setGoals([...goals, goalObject]);
  };

  // CouseItem에게 전달할 함수
  const deleteGoalHandler = (id) => {

    // 1. for문으로 삭제
    // let index = -1;
    // for (let i = 0; i < goals.length; i++) {
    //   if (goals[i].id === id) {
    //     index = i;
    //     break;
    //   }
    // }

    // goals.splice(index, 1);
    
    // setGoals([...goals]);

    // 2. findIndex
    // goals.splice(goals.findIndex(g => g.id === id), 1);

    // 3. filter, 일치하지 않은 애들은 필터 => 즉, 일치하는 애들만 선택되어서 삭제
    setGoals(goals.filter(g => g.id != id));


  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">
        <CourseList items={goals} onDelete={deleteGoalHandler} />
      </section>
    </div>
  );
};

export default App;
