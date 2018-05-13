import store from '../../redux/store';
import reducer, { key } from '../../redux/reducers/home';
import * as React from 'react';
import { actions } from '../../redux/actions/home';
import { injectReducer } from '../../utils/createReducer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

export interface Props {
    HomeAct1: () => void;
    HomeAct2: () => void;
  }

class Home extends React.Component<Props> {
render() {
    return (
  <div>home</div>
  );
}
}

const HomeComponent: any =  connect((state) => {
return state[key];
}, (dispatch) => {
return bindActionCreators(actions, dispatch);
})(Home);

// export default connect(key, actions)(Hello);
injectReducer(store, { key, reducer });

export default withRouter(HomeComponent);