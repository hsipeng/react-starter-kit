import React, { Component } from "react";
import HTTP from "../../utils/http";
export default class AjaxDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  onHandleAjaxClick = () => {
    const _this = this;
    HTTP.get("/todos/1", {}).then(response => {
      _this.setState({
        data: response.data
      });
    });
  };

  render() {
    return (
      <div>
        {JSON.stringify(this.state.data)}
        <span onClick={this.onHandleAjaxClick}>请求数据</span>
      </div>
    );
  }
}
