import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom"

export class FlowProfile extends Component {
    constructor (props) {
        super(props)
       
    }
    render() {
        console.log(this)
        return (
            <div>
            FlowProfile
            </div>
        )
    }
}

export default withRouter(FlowProfile);