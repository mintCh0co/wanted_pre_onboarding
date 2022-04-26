import React from "react";
import "./Toggle.css";

function Toggle() {
  return (
    <div className="toggle_container">
      <div className="wrapper">
        <input
          className="radio_button"
          type="radio"
          name="tab"
          id="tab1"
          defaultChecked
        ></input>
        <label htmlFor="tab1" className="radio_label" id="label1">
          <span>기본</span>
        </label>
        <input
          className="radio_button"
          type="radio"
          name="tab"
          id="tab2"
        ></input>
        <label htmlFor="tab2" className="radio_label" id="label2">
          <span>상세</span>
        </label>
        <div className="switch"></div>
      </div>
    </div>
  );
}

export default Toggle;
