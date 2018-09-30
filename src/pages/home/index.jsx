import React, {Component} from 'react';
import Counter from '@/components/counter/Counter';

export default class Home extends Component {
  constructor(props) {
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
