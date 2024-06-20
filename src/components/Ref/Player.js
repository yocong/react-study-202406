import React, { useState, useRef } from "react";

const Player = () => {

  const $nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('anonymous');
 
  // 이름 입력 후 빈칸으로 
  const nameChangeHandler = e => {
    console.log('click!');
    setEnteredName($nameInputRef.current.value);
    $nameInputRef.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredName}!</h2>
      <p>
        <input ref={$nameInputRef} type="text"/>
        <button onClick={nameChangeHandler}>Set Name</button>
      </p>
    </section>
  );
};

export default Player;