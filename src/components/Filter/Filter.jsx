import React from "react";
import { PropTypes } from "prop-types";
import "./Filter.scss";
import SwitchViewButton from "../SwitchViewButton/SwitchViewButton";

function Filter(props) {
  const {
    numberOfAllowedItems,
    numberOfBlockedItems,
    switchVisibility
  } = props;

  return (
    <div className="filter">
      <span className="filter__text">Categories:</span>

      <SwitchViewButton
        onClickHandlerAction={() => switchVisibility("blocked")}
        text={"Allowed"}
        counter={numberOfAllowedItems}
      />

      <SwitchViewButton
        onClickHandlerAction={() => switchVisibility("allowed")}
        text={"Blocked"}
        counter={numberOfBlockedItems}
      />
      
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  numberOfAllowedItems: PropTypes.number,
  numberOfBlockedItems: PropTypes.number,
  switchVisibility: PropTypes.func.isRequired
};
