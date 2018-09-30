import React, {Component} from 'react';
import Proptypes from 'prop-types';
import Counter from '@/components/counter/Counter';
import {connect} from 'react-redux';
import {addStar, reduceStar} from '@/redux/actions/counter';
class Home extends Component {
  static propTypes = {
    num: Proptypes.number,
    onIncreaseClick: Proptypes.func,
    onReduceClick: Proptypes.func,
  };
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

function mapStateToProps(state) {
  return {
    num: state.counter.num,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(addStar()),
    onReduceClick: () => dispatch(reduceStar()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
