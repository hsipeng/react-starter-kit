import React, {Component} from 'react'
import Nav from 'components/Nav/Nav'
import getRouter from 'router/router'
import ShowError from './ShowError'
import {withRouter} from "react-router-dom"

class App extends Component {
    render() {
        return (
            <ShowError>
                <Nav />
                {getRouter()}
            </ShowError>
        )
    }
}

export default withRouter(App)