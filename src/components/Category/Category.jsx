import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import Tooltip from "./../Tooltip/Tooltip";

import "./Category.scss";

function Category({ id, name, description, isAllow, onSwitchCategoryStatus }) {
  const categoryIconView = isAllow
    ? {
        icon: "check",
        className: "category__status"
      }
    : {
        icon: "ban",
        className: "category__status--blocked"
      };

  return (
    <div className="category" onClick={onSwitchCategoryStatus.bind(null, id)}>
      <i className={`${categoryIconView.className} fa-layers fa-fw`}>
        <FontAwesomeIcon icon={categoryIconView.icon}/>
      </i>

      <span className="category__text">{name}</span>
      <Tooltip description={description}>
        <i className="category__info">
          <FontAwesomeIcon icon={"info"} />
        </i>
      </Tooltip>
    </div>
  );
}

const shoudlCategoryUpdate = (props, nextProps) =>
  props.isAllow === nextProps.isAllow;

export default React.memo(Category, shoudlCategoryUpdate);

Category.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  isAllow: PropTypes.bool,
  onSwitchCategoryStatus: PropTypes.func
};
