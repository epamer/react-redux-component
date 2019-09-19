import React from "react";
import { PropTypes } from "prop-types";
import SwithAllButton from "../SwitchAllButton/SwitchAllButton";
import "./Select.scss";

function Select(props) {
  const { blockAll, allowAll, counter } = props;

  return (
    <div className="select">
      <SwithAllButton
        onClickHandlerAction={blockAll}
        isDisabled={counter.allowed === 0}
        icon={{
          className: "fa-ban",
          type: "block"
        }}
        text={"BlockAll"}
      />
      <SwithAllButton
        onClickHandlerAction={allowAll}
        isDisabled={counter.blocked === 0}
        icon={{
          className: "fa-check",
          type: "allow"
        }}
        text={"Allow All"}
      />
    </div>
  );
}

export default Select;

Select.propTypes = {
  allowAll: PropTypes.func.isRequired,
  blockAll: PropTypes.func.isRequired,
  counter: PropTypes.shape({
    allowed: PropTypes.number,
    blocked: PropTypes.number
  })
};
