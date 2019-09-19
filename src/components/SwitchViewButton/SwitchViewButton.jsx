import React from "react";
import { PropTypes } from "prop-types";
import "./SwitchViewButton.scss";

class SwitchViewButton extends React.Component {
  state = {
    isActive: false
  };

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.counter !== this.props.counter ||
      nextState.isActive !== this.state.isActive
      ? true
      : false;
  }

  onClickHandlerAction = () => {
    this.setState(state => ({
      isActive: !state.isActive
    }));
    this.props.onClickHandlerAction();
  };

  render() {
    const { text, counter } = this.props;

    let className = "switch-view-btn";
    if (this.state.isActive) {
      className = `${className} ${className}--active`;
    }

    return (
      <button className={className} onClick={this.onClickHandlerAction}>
        {text}
        <b>{counter}</b>
      </button>
    );
  }
}

export default SwitchViewButton;

SwitchViewButton.propTypes = {
  onClickHandlerAction: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired
};
