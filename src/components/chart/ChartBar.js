import React from "react";
import "./ChartBar.css";

const ChartBar = ({ label }) => {

  // 인라인 스타일 객체
  // const fillStyle = {
  //   height: '60%'
  // };

  let barFillHeight = '70%'

  // div 태그가 아니고 컴포넌트, className은 prop. 객체로 넣어야함
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;