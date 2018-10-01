import * as React from "react";
const Style = require("@/assets/style/demo.less");

export default class Header extends React.Component<Object,Object> {
  render(){
    return (
      <header className={Style.red}>
        <h1>webpack demo</h1>
      </header>
    );
  }
};
