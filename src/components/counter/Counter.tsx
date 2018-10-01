import * as React from "react";

export interface IProps {
  num?: Number,
  name: String,
  handleAddClick: Function,
  handleRemoveClick: Function,
}

export interface IState {

}
export default class Counter extends React.Component<
  IProps,
  IState
  > {

  constructor(props: IProps){
    super(props);
  }
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
