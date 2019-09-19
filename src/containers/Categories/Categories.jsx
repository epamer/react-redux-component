import React, { Component } from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faInfo, faCheck, faBan } from "@fortawesome/free-solid-svg-icons";

import "./Categories.scss";
import Category from "./../../components/Category/Category";
import Select from "../../components/Select/Select";
import Filter from "./../../components/Filter/Filter";
import { getCategoriesToDisplay } from "../../helpers";
import {
  fetchCategoryList,
  switchVisibility,
  allowAll,
  blockAll,
  switchCategoryStatus
} from "./../../actions/index";

// add fontawesome icons to library
// further we can use it as <FontAwesomeIcon icon={info} />
library.add(faInfo, faCheck, faBan);

class Categories extends Component {
  componentDidMount() {
    this.props.fetchCategoryList();
  }

  render() {
    const {
      categoriesToDisplay,
      counter,
      allowedIdis,
      switchVisibility,

      allowAll,
      blockAll,
      switchCategoryStatus
    } = this.props;
    return (
      <div className="categories">
        <div className="categories__body">
          <ul className="categories__list">
            {categoriesToDisplay.map(item => (
              <li className="categories__item" key={item.id}>
                <Category
                  id={item.id}
                  name={item.name}
                  description={item.description}
                  isAllow={allowedIdis.includes(item.id)}
                  onSwitchCategoryStatus={switchCategoryStatus}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="categories__footer">
          <Filter
            numberOfAllowedItems={counter.allowed}
            numberOfBlockedItems={counter.blocked}
            switchVisibility={switchVisibility}
          />
          <Select allowAll={allowAll} blockAll={blockAll} counter={counter} />
        </div>
      </div>
    );
  }
}
const mapStoreToProps = store => {
  const {
    categories,
    ui,
    categories: { allowedIdis, allIdis }
  } = store;
  return {
    categoriesToDisplay: getCategoriesToDisplay(categories, ui),
    counter: {
      allowed: allowedIdis.length,
      blocked: allIdis.length - allowedIdis.length
    },
    allowedIdis
  };
};

const mapDispatchToProps = {
  fetchCategoryList,
  switchVisibility,
  allowAll,
  blockAll,
  switchCategoryStatus
};

export default connect(
  mapStoreToProps,
  mapDispatchToProps
)(Categories);

Categories.propTypes = {
  categoriesToDisplay: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      discription: PropTypes.string
    })
  ),
  allowedIdis: PropTypes.arrayOf(PropTypes.number),
  counter: PropTypes.shape({
    allowed: PropTypes.number,
    blocked: PropTypes.number
  }),
  allowAll: PropTypes.func,
  blockAll: PropTypes.func,
  fetchCategoryList: PropTypes.func,
  switchVisibility: PropTypes.func,
  switchCategoryStatus: PropTypes.func
};
