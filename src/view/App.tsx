import * as React from 'react';
import Header from '../components/head/Header';
import getRouter from '../router/router';
// import { withRouter } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                {getRouter()}
            </div>
        );
    }
}

export default App;