import React, { useState, useRef } from 'react';
import ResultModal from './ResultModal';

const TimerChallenge = ({ title, targetTime }) => {

  // timer를 ref변수로 관리
  // -> timer는 지역, 전역변수, 1개의 timer를 공유하지않게 됨
  const timer = useRef();

  // 타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  // 타겟시간이 종료되었는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  // 자식컴포넌트 ResultModal에 있는  dialog태그의 참조를 만듦
  const dialog = useRef();

  const startHandler = e => {

    timer.current = setTimeout(() => {
      setTimerExpired(true);
      // modal open!
      dialog.current.showModal();
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  
  const stopHandler = e => {
    clearTimeout(timer.current);
  };

  return (
    <>
    {<ResultModal ref={dialog} targetTime={targetTime} result="lost" />}
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targetTime} seconds{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? stopHandler : startHandler}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
    </>
  );
};

export default TimerChallenge;