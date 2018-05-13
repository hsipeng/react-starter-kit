import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li><Link to="/">首页1</Link></li>
                <li><Link to="/hello">hello</Link></li>
               
            </ul>
        )
    }
}