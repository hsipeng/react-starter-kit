import React, {Component} from 'react';
import {withRouter} from "react-router-dom"


class CommodityAnalysis extends Component {
    constructor (props) {
        super(props)
       
    }
    render() {
        console.log(this)
        return (
            <div>
                商品详情分析1
            </div>
        )
    }
}

export default withRouter(CommodityAnalysis)