import React, { useState } from 'react';

const TimerChallenge = ({ title, targetTime }) => {

  // 타이머가 시작되었는지를 확인하는 상태값
  const [timerStarted, setTimerStarted] = useState(false);

  // 타겟시간이 종료되었는지 여부
  const [timerExpired, setTimerExpired] = useState(false);

  let timer;
  const startHandler = e => {

    timer = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime* 1000);

    setTimerStarted(true);
  }

  // 이 상황에서 stop이 작동하지 않는 이유
  // start시의 timer 변수가 지역변수이기 때문에
  // 상태변수의 setter 호출시 리렌더링이 되면서 새로운 지역변수로 바뀜
  // stop시의 timer와 start시의 timer는 다른 변수다.
  const stopHandler = e => {
    clearTimeout(timer);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
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
  );
};

export default TimerChallenge;