import * as React from 'react';
import Counter from '~/components/counter/Counter';
import modles from '~/utils/modles'
export interface IProps{
  reduxHome: {
    num: Number,
  },
  onIncreaseClick: Function,
  onReduceClick: Function,
}

export interface IState{
  counter: {
    num: Object,
  }
}
class Home extends React.Component<IProps,IState> {

  render() {
    return (
      <Counter
        num={this.props.reduxHome.num}
        name="点赞2 - dispatch action"
        handleAddClick={this.props.onIncreaseClick}
        handleRemoveClick={this.props.onReduceClick}
      />
    );
  }
}

export default modles("reduxHome", "reduxHome")(Home as any);
