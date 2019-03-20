import * as React from 'react';
import Counter from '~/components/counter/Counter';

export interface IProps {}

export interface IState {
  num?: any;
}
export default class Home extends React.Component<
  IProps,
  IState
> {
  
  static defaultProps = {
    num: 0,
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      num: 0,
    };
  }

  handleAddClick = () => {
    let sum = this.state.num + 1;
    this.setState({
      num: sum,
    });
  };

  handleRemoveClick = () => {
    let sum = this.state.num - 1;
    sum < 0 ? (sum = 0) : sum;
    this.setState({
      num: sum,
    });
  };

  render() {
    return (
      <Counter
        num={this.state.num}
        name="点赞1 - state"
        handleAddClick={this.handleAddClick}
        handleRemoveClick={this.handleRemoveClick}
      />
    );
  }
}
