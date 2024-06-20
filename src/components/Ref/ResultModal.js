import React, { useEffect, useRef } from 'react';

const ResultModal = ({result, targetTime}) => {

  const dialog = useRef();

  useEffect(() => {
    dialog.current.showModal();
  }, []);

  // dialog 태그: 모달의 모든 함수를 제공하는 태그
  return (
    <dialog ref={dialog} className="result-modal">
      <h2>Your {result}!</h2>
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the timer with <strong>X seconds left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;