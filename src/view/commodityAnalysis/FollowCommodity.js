import React, {Component} from 'react';
import {connect} from 'react-redux';


export default class FollowCommodity extends Component {
    constructor (props) {
        super(props)
       
    }
    render() {
        console.log(this)
        return (
            <div>
            待关注商品
            </div>
        )
    }
}

