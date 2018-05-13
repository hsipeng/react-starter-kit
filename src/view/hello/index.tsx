import * as React from 'react';
import store from '../../redux/store';
import reducer, { key } from '../../redux/reducers/hello/index';
import { actions } from '../../redux/actions/hello';
import './hello.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { injectReducer } from '../../utils/createReducer';
import AsyncLoading from '../../utils/AsyncLoadingDecorator';

// @withRouter
// @connect(key, actions)
@AsyncLoading
class Hello extends React.Component<any, any> {
    render() {
    // console.log(this, 'this')
        return (
            <div>
            Hello1
            </div>
        );
    }
}

// export default Hello
const HelloComponent: any =  connect((state) => {
    return state[key];
}, (dispatch) => {
    return bindActionCreators(actions, dispatch);
})(Hello);

injectReducer(store, { key, reducer });

export default withRouter(HelloComponent);