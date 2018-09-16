import Proptypes from "prop-types";
import React, { Component } from "react";

export default class Counter extends Component {
  static propTypes = {
    num: Proptypes.number.isRequired,
    handleAddClick: Proptypes.func.isRequired,
    handleRemoveClick: Proptypes.func.isRequired
  };

  static defaultProps = {
    num: 0
  };
  handleAddClick = () => {
    this.props.handleAddClick();
  };

  handleRemoveClick = () => {
    this.props.handleRemoveClick();
  };

  render() {
    const { num = 0, name = "点赞数" } = this.props;
    return (
      <div>
        <p>
          {num}
          <em>{name}</em>
        </p>
        <button onClick={this.handleAddClick}>+</button>
        <button onClick={this.handleRemoveClick}>-</button>
      </div>
    );
  }
}
