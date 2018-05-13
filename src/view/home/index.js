import store from 'store'
import reducer, { key } from 'reducers/home'
import React, { Component } from 'react'
import {actions} from 'actions/home'
import { injectReducer } from 'utils/createReducer'
import connect from 'utils/ConnectDecorator'
import {bindActionCreators} from 'redux'
import {withRouter} from "react-router-dom"

@withRouter
@connect(key, actions)
export default class Home extends Component {

	constructor (props) {
		super(props)
		this.props.HomeAct1()
		this.props.HomeAct2()
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps,'200')
	}
	render() {
		console.log(this, 'this')
		return (
			<div>
				home
			</div>
		)
	}
}

injectReducer(store, { key, reducer })