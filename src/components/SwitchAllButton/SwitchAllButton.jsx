import React from "react";
import { PropTypes } from "prop-types";
import "./SwitchAllButton.scss";

function SwitchAllButton(props) {
  const { onClickHandlerAction, isDisabled, icon, text } = props;

  return (
    <button
      className={"switch-all-btn"}
      onClick={onClickHandlerAction}
      disabled={isDisabled}
    >
      <i
        className={`switch-all-btn__icon switch-all-btn__icon--${
          icon.type
        } fa ${icon.className}`}
      />
      {text}
    </button>
  );
}

export default SwitchAllButton;

SwitchAllButton.propTypes = {
  onClickHandlerAction: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  icon: PropTypes.object,
  type: PropTypes.string,
  text: PropTypes.string.isRequired
};
