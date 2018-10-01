import * as React from 'react';
import Counter from '@/components/counter/Counter';
import {connect} from 'react-redux';
import {addStar, reduceStar} from '@/redux/actions/counter';

export interface IProps{
  num: Number,
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
        num={this.props.num}
        name="点赞2 - dispatch action"
        handleAddClick={this.props.onIncreaseClick}
        handleRemoveClick={this.props.onReduceClick}
      />
    );
  }
}

function mapStateToProps(state: IState) {
  return {
    num: state.counter.num,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onIncreaseClick: () => dispatch(addStar()),
    onReduceClick: () => dispatch(reduceStar()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home as any);
