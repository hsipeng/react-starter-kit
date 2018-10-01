import * as React from "react";
import Counter from "@/components/counter/Counter";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { actions } from "@/redux/actions/counter2";
import reducer, { key } from "@/redux/reducers/counter2";
import { injectReducer } from "@/redux/store/reducers";
import store from "@/redux/store";

export interface IProps{
  num: Number,
  addCounter: Function,
  reduceCounter: Function,
}
export interface IState{
  [key: string]: any;
}
class Home2 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    // this.props.addCounter();
  }

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
  (state:{
    // 强制可以循环
    [key: string]: any;
  }) => {
    return state[key] || {};
  },
  dispatch => {
    return bindActionCreators(actions, dispatch);
  }
)(Home2);
