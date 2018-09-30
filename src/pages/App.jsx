import React, {Component} from 'react';
import LeftMenu from '../components/leftMenu/';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Style from '../assets/style/index.css';
import {hot} from 'react-hot-loader';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <div className={Style.container}>
          <LeftMenu />
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

let HotApp = App;
if (process.env.NODE_ENV === 'development') {
  // 热启动
  HotApp = hot(module)(App);
}

export default HotApp;
