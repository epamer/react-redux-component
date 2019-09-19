import React from "react";
import { PropTypes } from 'prop-types';
import "./Tooltip.scss";

function Tooltip({ description, children }) {
  return (
    <span className="tooltip" tooltip={description} tooltip-position="top">
      {children}
    </span>
  );
}

export default Tooltip;

Tooltip.propTypes = {
  description: PropTypes.string,
  children: PropTypes.object
}