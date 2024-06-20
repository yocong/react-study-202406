import React, { useState, useRef } from 'react';
import { MdAdd } from 'react-icons/md';

import './scss/TodoInput.scss';

const TodoInput = ({ onAdd }) => {

    // input의 주소값을 기억하는 변수 생성
    // react에선 document.qs 대신 useRef를 사용하여 돔과 연결.
    const $textInput = useRef();


    // 입력창 토글링 상태값
    const [open, setOpen] = useState(false);

    // 버튼 토글링 함수
    const onToggle = () => setOpen(prevOpen => !prevOpen);


    const submitHandler = e => {
        e.preventDefault();
        // document.querySelect('.text').value 와 동일
        onAdd($textInput.current.value);

        // form이 제출되면 입력창 비우기
        $textInput.current.value = '';
        setOpen(false)
    };



    return (
        <>
            {open && (
                <div className="form-wrapper">
                    <form className="insert-form" onSubmit={submitHandler}>
                        <input
                            ref={$textInput}
                            type="text"
                            placeholder="할 일을 입력 후, 엔터를 누르세요!"
                        />
                    </form>
                </div>
            )}

            <button
                className={`insert-btn ${open ? 'open' : undefined}`}
                onClick={onToggle}
            >
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;
