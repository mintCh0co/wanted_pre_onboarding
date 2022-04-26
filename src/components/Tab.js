import React from "react";
import "./Tab.css";

function Tab() {
  return (
    <div class="tab_container">
      <div class="tab_wrapper">
        <input
          class="radio_button"
          type="radio"
          name="tab"
          id="potato"
          defaultChecked
        />
        <label class="radio_label" htmlFor="potato" id="potatoLabel">
          <span>감자</span>
        </label>
        <input class="radio_button" type="radio" name="tab" id="sweetpotato" />
        <label class="radio_label" htmlFor="sweetpotato" id="sweetPotatoLabel">
          <span>고구마</span>
        </label>
        <input class="radio_button" type="radio" name="tab" id="curry" />
        <label class="radio_label" htmlFor="curry" id="curryLabel">
          <span>카레라이스</span>
        </label>
        <div class="bar"></div>
      </div>
    </div>
  );
}

export default Tab;
