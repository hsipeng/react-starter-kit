import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom"

class CommodityRanking extends Component {
    constructor (props) {
        super(props)
       
    }
    render() {
        console.log(this)
        return (
            <div>
            商品排行
            </div>
        )
    }
}

export default withRouter(CommodityRanking)
