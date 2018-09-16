import React, { Component } from "react";
import Proptypes from "prop-types";
import Counter from "../../components/counter/Counter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "../../redux/actions/counter2";
import reducer, { key } from "../../redux/reducers/counter2";
import { injectReducer } from "../../redux/store/reducers";
import store from "../../redux/store";
class Home2 extends Component {
  constructor(props) {
    super(props);
    // this.props.addCounter();
  }

  static propTypes = {
    num: Proptypes.number,
    addCounter: Proptypes.func,
    reduceCounter: Proptypes.func
  };
  render() {
    return (
      <Counter
        num={this.props.num}
        name="点赞3- injectReducer"
        handleAddClick={this.props.addCounter}
        handleRemoveClick={this.props.reduceCounter}
      />
    );
  }
}
injectReducer(store, { key, reducer });

export default connect(
  state => {
    return state[key] || {};
  },
  dispatch => {
    return bindActionCreators(actions, dispatch);
  }
)(Home2);
