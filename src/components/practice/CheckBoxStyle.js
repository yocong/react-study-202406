import React, { useState } from "react";
import "./CheckBoxStyle.css";

const CheckBoxStyle = () => {
  // 체크 상태를 관리
  const [isChecked, setIsChecked] = useState(false);

  // 클릭했을 때 발생하는 이벤트 핸들러
  const checkChangeHandler = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="checkbox-container">
      <input
      type="checkbox"
      id="styled-checkbox"
      onChange={checkChangeHandler}
      />
      <label
        htmlFor="styled-checkbox"
        className={isChecked ? 'checked' : 'unchecked'}
        >
        Check me!
      </label>
    </div>
  );
};

export default CheckBoxStyle;
